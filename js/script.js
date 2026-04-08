const app = {
    stats: { total: 0, correct: 0, streak: 0, wrong: [], answered: new Set() },
    current: null,
    selected: null,
    optionMap: [],
    correctDisplayIndex: null,
    currentPool: [],      // 🆕 NOVA VARIÁVEL
    poolIndex: 0,         // 🆕 NOVA VARIÁVEL

    init() {
        this.loadQuestoes();
    },

    loadQuestoes() {
        fetch('js/questoes.json')  // 👈 MUDA AQUI
            .then(res => res.json())
            .then(data => {
                this.questions = data.questoes;
                this.loadStats();
                this.updateDisplay();
            })
            .catch(err => {
                console.error('Erro ao carregar questões:', err);
                alert('Erro ao carregar as questões. Verifique se questoes.json está em js/questoes.json');
            });
    },

    loadStats() {
        const saved = localStorage.getItem('quizModelagemStats');
        if (saved) {
            const data = JSON.parse(saved);
            this.stats = { ...this.stats, ...data, answered: new Set(data.answered || []), wrong: data.wrong || [] };
        }
    },
    saveStats() {
        localStorage.setItem('quizModelagemStats', JSON.stringify({ ...this.stats, answered: Array.from(this.stats.answered) }));
    },

    updateDisplay() {
        document.getElementById('statTotal').textContent = this.stats.total;
        document.getElementById('statCorrect').textContent = this.stats.correct;
        const rate = this.stats.total > 0 ? Math.round((this.stats.correct / this.stats.total) * 100) : 0;
        document.getElementById('statRate').textContent = rate + '%';
        document.getElementById('statStreak').textContent = this.stats.streak;
        const progress = (this.questions.length > 0) ? (this.stats.answered.size / this.questions.length) * 100 : 0;
        document.getElementById('progressFill').style.width = progress + '%';
        document.getElementById('progressText').textContent = `${this.stats.answered.size} de ${this.questions.length} questões únicas`;
    },


    startQuiz() {
        document.getElementById('homeScreen').style.display = 'none';
        document.getElementById('questionArea').classList.add('active');
        this.initializePool(); // 🆕 INICIALIZAR POOL
        this.loadQuestion();
    },

    // 🆕 NOVO MÉTODO: Inicializa a pool de questões com embaralhamento
    initializePool() {
        const mode = document.getElementById('modeSelect').value;
        const subject = document.getElementById('subjectSelect').value;

        let pool = this.questions.filter(q => subject === 'all' || q.subject === subject);

        if (mode === 'new') {
            pool = pool.filter(q => !this.stats.answered.has(q.id));
            if (pool.length === 0) pool = this.questions.filter(q => subject === 'all' || q.subject === subject);
        } else if (mode === 'review') {
            pool = pool.filter(q => this.stats.wrong.includes(q.id));
            if (pool.length === 0) {
                alert('Nenhuma questão errada para revisar!');
                this.goBack();
                return;
            }
        }

        // 🆕 SORTEAR 80 QUESTÕES ALEATÓRIAS DA POOL
        pool = this.shuffleArray(pool).slice(0, 80);

        this.currentPool = this.shuffleArray([...pool]);
        this.poolIndex = 0;
    },

    // 🆕 NOVO MÉTODO: Fisher-Yates Shuffle
    shuffleArray(array) {
        const arr = [...array];
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    },

    loadQuestion() {
        // 🆕 VERIFICAR SE POOL ACABOU
        if (this.poolIndex >= this.currentPool.length) {
            alert(`✓ Você respondeu todas as questões dessa seleção!\n\nDeseja começar um novo ciclo?`);
            this.initializePool();
            if (this.currentPool.length === 0) {
                this.goBack();
                return;
            }
        }

        // 🆕 PEGAR A PRÓXIMA QUESTÃO DA POOL (NÃO ALEATÓRIA)
        this.current = this.currentPool[this.poolIndex];
        this.poolIndex++;

        this.selected = null;
        this.displayQuestion();
    },

    displayQuestion() {
    document.getElementById('questionNumber').textContent = `Questão ${this.current.id} de ${this.questions.length} (${this.poolIndex} de ${this.currentPool.length} nesta sessão)`;
    document.getElementById('questionSubject').textContent = this.current.subject;
    document.getElementById('questionText').textContent = this.current.question;

    const container = document.getElementById('optionsContainer');
    container.innerHTML = '';

    // ✅ SEM EMBARALHAMENTO - opções na ordem original
    this.correctDisplayIndex = this.current.correct;

    // Exibir opções em ordem
    this.current.options.forEach((opt, displayIndex) => {
        const div = document.createElement('div');
        div.className = 'option';
        div.innerHTML = `<span class="option-letter">${String.fromCharCode(65 + displayIndex)}</span>${opt}`;
        div.onclick = () => this.selectOption(displayIndex, div);
        container.appendChild(div);
    });

    document.getElementById('feedback').classList.remove('show');
    document.getElementById('btnConfirm').classList.remove('hidden');
    document.getElementById('btnNext').classList.add('hidden');
},

    selectOption(index, element) {
        document.querySelectorAll('.option').forEach(el => el.classList.remove('selected'));
        element.classList.add('selected');
        this.selected = index;
    },

    confirmAnswer() {
        if (this.selected === null) { alert('Por favor, selecione uma resposta!'); return; }
        this.stats.total++;
        this.stats.answered.add(this.current.id);

        const isCorrect = this.selected === this.correctDisplayIndex;

        const feedback = document.getElementById('feedback');
        const options = document.querySelectorAll('.option');
        options.forEach(el => el.classList.add('disabled'));

        if (isCorrect) {
            this.stats.correct++;
            this.stats.streak++;
            this.stats.wrong = this.stats.wrong.filter(id => id !== this.current.id);
            options[this.selected].classList.add('correct');
            feedback.className = 'feedback show correct';
            document.getElementById('feedbackTitle').textContent = '✓ Resposta Correta!';
        } else {
            this.stats.streak = 0;
            if (!this.stats.wrong.includes(this.current.id)) this.stats.wrong.push(this.current.id);
            options[this.selected].classList.add('incorrect');
            options[this.correctDisplayIndex].classList.add('correct');
            feedback.className = 'feedback show incorrect';
            document.getElementById('feedbackTitle').textContent = `✗ Resposta Incorreta! Correta: ${String.fromCharCode(65 + this.correctDisplayIndex)}`;
        }

        document.getElementById('feedbackText').textContent = this.current.explanation;
        this.saveStats();
        this.updateDisplay();
        document.getElementById('btnConfirm').classList.add('hidden');
        document.getElementById('btnNext').classList.remove('hidden');
    },

    nextQuestion() { this.loadQuestion(); },

    goBack() {
        document.getElementById('questionArea').classList.remove('active');
        document.getElementById('homeScreen').style.display = 'block';
        this.currentPool = []; // 🆕 LIMPAR POOL AO VOLTAR
        this.poolIndex = 0;
        this.updateDisplay();
    },

    showStats() {
        const content = document.getElementById('statsContent');
        const rate = this.stats.total > 0 ? Math.round((this.stats.correct / this.stats.total) * 100) : 0;

        const subjectsStats = {};
        this.questions.forEach(q => {
            if (!subjectsStats[q.subject]) subjectsStats[q.subject] = { total: 0, correct: 0 };
            if (this.stats.answered.has(q.id)) {
                subjectsStats[q.subject].total++;
                if (!this.stats.wrong.includes(q.id)) subjectsStats[q.subject].correct++;
            }
        });

        let subjectHtml = '<div class="subject-stats"><strong>Por Tema:</strong>';
        Object.keys(subjectsStats).forEach(subject => {
            const s = subjectsStats[subject];
            if (s.total > 0) {
                const subRate = Math.round((s.correct / s.total) * 100);
                subjectHtml += `<div class="subject-item"><span class="subject-label">${subject}</span><span class="subject-value">${s.correct}/${s.total} (${subRate}%)</span></div>`;
            }
        });
        subjectHtml += '</div>';

        content.innerHTML = `
            <div class="modal-stat"><span class="modal-stat-label">Total Respondidas</span><span class="modal-stat-value">${this.stats.total}</span></div>
            <div class="modal-stat"><span class="modal-stat-label">Acertos</span><span class="modal-stat-value">${this.stats.correct}</span></div>
            <div class="modal-stat"><span class="modal-stat-label">Erros</span><span class="modal-stat-value">${this.stats.total - this.stats.correct}</span></div>
            <div class="modal-stat"><span class="modal-stat-label">Taxa de Acerto</span><span class="modal-stat-value">${rate}%</span></div>
            <div class="modal-stat"><span class="modal-stat-label">Sequência Atual</span><span class="modal-stat-value">${this.stats.streak}</span></div>
            <div class="modal-stat"><span class="modal-stat-label">Questões Únicas Respondidas</span><span class="modal-stat-value">${this.stats.answered.size}/${this.questions.length}</span></div>
            <div class="modal-stat"><span class="modal-stat-label">Questões para Revisar</span><span class="modal-stat-value">${this.stats.wrong.length}</span></div>
            ${subjectHtml}
        `;
        document.getElementById('statsModal').classList.add('show');
    },

    closeStats() { document.getElementById('statsModal').classList.remove('show'); },

    resetConfirm() {
        if (confirm('Tem certeza que deseja resetar TODO o seu progresso? Esta ação não pode ser desfeita!')) {
            this.stats = { total: 0, correct: 0, streak: 0, wrong: [], answered: new Set() };
            this.saveStats();
            this.updateDisplay();
            alert('✓ Progresso resetado com sucesso!');
        }
    }
};

app.init();