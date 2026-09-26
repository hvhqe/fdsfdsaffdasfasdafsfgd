// ---------- cursor glow ----------
(function () {
    const glow = document.getElementById('cursor-glow');
    if (!glow) return;

    if (window.matchMedia('(pointer: coarse)').matches) return;

    let mouseX = 0, mouseY = 0;
    let glowX = 0, glowY = 0;
    let active = false;

    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        if (!active) {
            glow.classList.add('active');
            active = true;
        }
    });

    window.addEventListener('mouseleave', () => {
        glow.classList.remove('active');
        active = false;
    });

    function animate() {
        glowX += (mouseX - glowX) * 0.15;
        glowY += (mouseY - glowY) * 0.15;
        glow.style.left = glowX + 'px';
        glow.style.top = glowY + 'px';
        requestAnimationFrame(animate);
    }

    animate();
})();

// ---------- preloader ----------
(function () {
    const preloader = document.getElementById('preloader');
    if (!preloader) return;

    const seen = sessionStorage.getItem('aimstar_preloader_seen');
    if (seen) {
        preloader.classList.add('done');
        document.body.classList.add('loaded');
        return;
    }

    document.body.classList.add('loading');

    setTimeout(() => {
        preloader.classList.add('opening');
        document.body.classList.add('loaded');
        document.body.classList.remove('loading');
        sessionStorage.setItem('aimstar_preloader_seen', '1');

        setTimeout(() => {
            preloader.classList.add('done');
        }, 1000);
    }, 2400);
})();

// ---------- i18n ----------
const I18N = {
    ru: {
        nav_features: 'Возможности',
        nav_commands: 'Команды',
        nav_connect: 'Подключить',
        nav_faq: 'FAQ',
        header_open: 'Открыть бота',
        hero_badge: 'бесплатный • без подписок • без рекламы',
        hero_title: 'Сохраняем <span class="accent">удалённые</span> сообщения<br>и даём команды прямо в чатах',
        hero_sub: 'aimstar подключается к Telegram Business и работает от твоего имени. Собеседник ничего не заподозрит. Все удалённые сообщения — в твоей личке с ботом.',
        hero_btn_bot: 'Подключить бота',
        hero_btn_channel: 'Наш канал',
        stat_works: 'работает',
        stat_forever: 'навсегда',
        stat_commands: 'команд',
        features_title: 'Возможности',
        features_sub: 'Всё, что умеет aimstar',
        f1_title: 'Архив удалённых',
        f1_desc: 'Собеседник удалил сообщение — оно мгновенно прилетает тебе в личку с ботом. С фото, видео, голосовыми.',
        f2_title: 'Отслеживание правок',
        f2_desc: 'Видишь что было в сообщении до того, как собеседник его отредактировал.',
        f3_title: 'AI и переводы',
        f3_desc: 'Спроси Gemini прямо в чате или переведи любое сообщение на русский одним словом.',
        f4_title: 'Игры',
        f4_desc: 'Рулетка, монетка, дуэль, крестики-нолики — играй с собеседником от своего имени.',
        f5_title: 'Модерация',
        f5_desc: 'Мут, постоянный мут, антимут. Нарушитель не напишет ни слова.',
        f6_title: 'Мемы и медиа',
        f6_desc: 'Случайные мемы, водяные знаки на фото, чёрные поля с текстом.',
        cmd_title: 'Команды',
        cmd_sub: 'Пишешь в чате с собеседником — бот делает',
        cmd_search: 'Поиск команды...',
        filter_all: 'Все',
        filter_spam: 'Спам',
        filter_text: 'Текст',
        filter_util: 'Утилиты',
        filter_game: 'Игры',
        filter_media: 'Медиа',
        filter_mod: 'Модерация',
        connect_title: 'Как подключить',
        connect_sub: 'Один раз и навсегда, 30 секунд',
        s1_title: 'Открой настройки',
        s1_desc: 'Telegram → Настройки → Telegram Business',
        s2_title: 'Раздел «Чат-боты»',
        s2_desc: 'Тапни на раздел и выбери «Добавить бота»',
        s3_title: 'Введи @aimstarsavebot',
        s3_desc: 'Скопируй имя и вставь в поиск',
        s4_title: 'Выдай все права',
        s4_desc: 'Включи все 5 галочек в настройках бота',
        cta_ready: 'Готов?',
        cta_btn: 'Открыть @aimstarsavebot',
        faq_title: 'FAQ',
        faq_sub: 'Частые вопросы',
        q1: 'Бот платный?',
        a1: 'Нет. aimstar полностью бесплатный, без подписок, без рекламы, без ограничений.',
        q2: 'Что если собеседник удалит весь диалог целиком?',
        a2: 'Telegram не присылает уведомление об удалении всего диалога — только отдельных сообщений. Но всё, что бот видел вживую, уже сохранено в базе и останется у тебя.',
        q3: 'Работает ли бот в группах и каналах?',
        a3: 'Нет. aimstar работает только в личных переписках. Это ограничение Telegram Business API.',
        q4: 'Собеседник узнает, что я использую бота?',
        a4: 'Нет. Все команды работают от твоего имени. Собеседник видит обычные сообщения — как будто ты сам их пишешь.',
        q5: 'Как снять мут с собеседника?',
        a5: 'Напиши .unmute в чате или нажми красную кнопку «Размутить» под плашкой мута.',
        q6: 'Где хранятся мои сообщения?',
        a6: 'На сервере бота в защищённой базе данных. Доступ есть только у тебя — через личку с ботом.',
        footer_desc: 'Архиватор удалённых сообщений и команд для Telegram.',
        footer_links: 'Ссылки',
        footer_bot: 'Бот',
        footer_channel: 'Канал',
        footer_docs: 'Документация',
        footer_commands: 'Команды',
        footer_connect: 'Подключение',
        footer_faq: 'FAQ',
        footer_copy: '© 2026 aimstar. Все права защищены.',
        cmd_copied: 'Скопировано ✓',
        cmd_empty: 'Ничего не найдено',
    },
    en: {
        nav_features: 'Features',
        nav_commands: 'Commands',
        nav_connect: 'Connect',
        nav_faq: 'FAQ',
        header_open: 'Open bot',
        hero_badge: 'free • no subscriptions • no ads',
        hero_title: 'We save <span class="accent">deleted</span> messages<br>and give commands right in chats',
        hero_sub: 'aimstar connects to Telegram Business and works as you. Your peer will not notice a thing. All deleted messages — in your DM with the bot.',
        hero_btn_bot: 'Connect bot',
        hero_btn_channel: 'Our channel',
        stat_works: 'online',
        stat_forever: 'forever',
        stat_commands: 'commands',
        features_title: 'Features',
        features_sub: 'Everything aimstar can do',
        f1_title: 'Deleted archive',
        f1_desc: 'Your peer deleted a message — it instantly arrives in your DM with the bot. Photos, videos, voice included.',
        f2_title: 'Edit tracking',
        f2_desc: 'See what the message was before your peer edited it.',
        f3_title: 'AI and translation',
        f3_desc: 'Ask Gemini right in the chat or translate any message to Russian with one word.',
        f4_title: 'Games',
        f4_desc: 'Roulette, coin, duel, tic-tac-toe — play with your peer as yourself.',
        f5_title: 'Moderation',
        f5_desc: 'Mute, permanent mute, antimute. The offender will not write a word.',
        f6_title: 'Memes and media',
        f6_desc: 'Random memes, watermarks on photos, black bars with text.',
        cmd_title: 'Commands',
        cmd_sub: 'You write in the chat — the bot does',
        cmd_search: 'Search command...',
        filter_all: 'All',
        filter_spam: 'Spam',
        filter_text: 'Text',
        filter_util: 'Utils',
        filter_game: 'Games',
        filter_media: 'Media',
        filter_mod: 'Moderation',
        connect_title: 'How to connect',
        connect_sub: 'Once and forever, 30 seconds',
        s1_title: 'Open settings',
        s1_desc: 'Telegram → Settings → Telegram Business',
        s2_title: 'Section "Chatbots"',
        s2_desc: 'Tap the section and choose "Add bot"',
        s3_title: 'Enter @aimstarsavebot',
        s3_desc: 'Copy the username and paste it into the search',
        s4_title: 'Grant all rights',
        s4_desc: 'Enable all 5 checkboxes in the bot settings',
        cta_ready: 'Ready?',
        cta_btn: 'Open @aimstarsavebot',
        faq_title: 'FAQ',
        faq_sub: 'Common questions',
        q1: 'Is the bot paid?',
        a1: 'No. aimstar is completely free — no subscriptions, no ads, no limits.',
        q2: 'What if my peer deletes the whole dialog?',
        a2: 'Telegram does not send a notification about deleting the whole dialog — only individual messages. But everything the bot saw live is already saved in the database and stays with you.',
        q3: 'Does the bot work in groups and channels?',
        a3: 'No. aimstar only works in private chats. This is a Telegram Business API limitation.',
        q4: 'Will my peer know I use the bot?',
        a4: 'No. All commands work as you. Your peer sees normal messages — as if you write them yourself.',
        q5: 'How to unmute a peer?',
        a5: 'Send .unmute in the chat or tap the red "Unmute" button under the mute card.',
        q6: 'Where are my messages stored?',
        a6: 'On the bot server in a secure database. Only you have access — via DM with the bot.',
        footer_desc: 'Deleted message and command archiver for Telegram.',
        footer_links: 'Links',
        footer_bot: 'Bot',
        footer_channel: 'Channel',
        footer_docs: 'Docs',
        footer_commands: 'Commands',
        footer_connect: 'Connect',
        footer_faq: 'FAQ',
        footer_copy: '© 2026 aimstar. All rights reserved.',
        cmd_copied: 'Copied ✓',
        cmd_empty: 'Nothing found',
    },
};

let currentLang = 'ru';

function t(key) {
    return (I18N[currentLang] && I18N[currentLang][key]) || (I18N.ru[key] || key);
}

function setLang(lang) {
    if (!I18N[lang]) lang = 'ru';
    currentLang = lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (I18N[lang][key]) el.textContent = I18N[lang][key];
    });

    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.dataset.i18nHtml;
        if (I18N[lang][key]) el.innerHTML = I18N[lang][key];
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.dataset.i18nPlaceholder;
        if (I18N[lang][key]) el.placeholder = I18N[lang][key];
    });

    document.documentElement.lang = lang;
    localStorage.setItem('aimstar_lang', lang);

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    renderCommands();
}

document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
});

// ---------- commands ----------
const COMMANDS = [
    { name: '.haha [n]', desc: { ru: 'N сообщений пк-смеха (по умолчанию 5)', en: 'N pk-laugh messages (default 5)' }, cat: 'spam' },
    { name: '.spam [n] [текст]', desc: { ru: 'N раз отправить твой текст', en: 'Send your text N times' }, cat: 'spam' },
    { name: '.flood <текст>', desc: { ru: 'Каждое слово отдельным сообщением', en: 'Each word as a separate message' }, cat: 'spam' },
    { name: '.type <текст>', desc: { ru: 'По одному слову с задержкой', en: 'One word at a time with delay' }, cat: 'spam' },

    { name: '.rev <текст>', desc: { ru: 'Текст задом наперёд', en: 'Text reversed' }, cat: 'text' },
    { name: '.leet <текст>', desc: { ru: 'l33t-стиль', en: 'l33t style' }, cat: 'text' },
    { name: '.sw <текст>', desc: { ru: 'Смена раскладки q↔й', en: 'Layout switch q↔й' }, cat: 'text' },
    { name: '.bold <текст>', desc: { ru: 'Жирный текст', en: 'Bold text' }, cat: 'text' },
    { name: '.italic <текст>', desc: { ru: 'Курсив', en: 'Italic' }, cat: 'text' },
    { name: '.mono <текст>', desc: { ru: 'Моноширинный', en: 'Monospace' }, cat: 'text' },
    { name: '.line <текст>', desc: { ru: 'Подчёркнутый', en: 'Underlined' }, cat: 'text' },
    { name: '.crossed <текст>', desc: { ru: 'Зачёркнутый', en: 'Strikethrough' }, cat: 'text' },
    { name: '.hidden <текст>', desc: { ru: 'Скрытый текст', en: 'Hidden text' }, cat: 'text' },
    { name: '.quote <текст>', desc: { ru: 'Цитата', en: 'Quote' }, cat: 'text' },
    { name: '.code <текст>', desc: { ru: 'Блок кода', en: 'Code block' }, cat: 'text' },

    { name: '.ai <вопрос>', desc: { ru: 'Спросить Gemini AI', en: 'Ask Gemini AI' }, cat: 'util' },
    { name: '.tl <текст>', desc: { ru: 'Перевести на русский', en: 'Translate to Russian' }, cat: 'util' },
    { name: '.short <url>', desc: { ru: 'Сократить ссылку', en: 'Shorten a URL' }, cat: 'util' },
    { name: '.info', desc: { ru: 'Инфо о собеседнике', en: 'Peer info' }, cat: 'util' },
    { name: '.dice', desc: { ru: 'Кинуть кубик', en: 'Roll a dice' }, cat: 'util' },
    { name: '.img', desc: { ru: 'Копия медиа в личку', en: 'Copy of media to DM' }, cat: 'util' },

    { name: '.rps', desc: { ru: 'Камень-ножницы-бумага', en: 'Rock-paper-scissors' }, cat: 'game' },
    { name: '.flip', desc: { ru: 'Орёл или решка', en: 'Heads or tails' }, cat: 'game' },
    { name: '.duel', desc: { ru: 'Дуэль на револьверах', en: 'Revolver duel' }, cat: 'game' },
    { name: '.xox', desc: { ru: 'Крестики-нолики', en: 'Tic-tac-toe' }, cat: 'game' },
    { name: '.streak', desc: { ru: 'Серия — сколько дней вы общаетесь', en: 'Streak — days since first message' }, cat: 'game' },

    { name: '.meme', desc: { ru: 'Случайный мем', en: 'Random meme' }, cat: 'media' },
    { name: '.wtm <текст>', desc: { ru: 'Водяной знак на фото', en: 'Watermark on photo' }, cat: 'media' },
    { name: '.memz <текст>', desc: { ru: 'Чёрные поля с текстом', en: 'Black bars with text' }, cat: 'media' },

    { name: '.mute [срок]', desc: { ru: 'Мут на время (30s, 5m, 1h, 2d, 1w)', en: 'Timed mute (30s, 5m, 1h, 2d, 1w)' }, cat: 'mod' },
    { name: '.swmute', desc: { ru: 'Постоянный мут', en: 'Permanent mute' }, cat: 'mod' },
    { name: '.unmute', desc: { ru: 'Снять мут', en: 'Unmute' }, cat: 'mod' },
    { name: '.antimute', desc: { ru: 'Дублирование своих сообщений', en: 'Duplicate your own messages' }, cat: 'mod' },
];

const grid = document.getElementById('cmd-grid');
const search = document.getElementById('search');
const filters = document.querySelectorAll('.filter');

let currentFilter = 'all';
let currentSearch = '';

function renderCommands() {
    if (!grid) return;

    const filtered = COMMANDS.filter(cmd => {
        const matchFilter = currentFilter === 'all' || cmd.cat === currentFilter;
        const d = cmd.desc[currentLang] || cmd.desc.ru;
        const matchSearch = currentSearch === '' ||
            cmd.name.toLowerCase().includes(currentSearch) ||
            d.toLowerCase().includes(currentSearch);
        return matchFilter && matchSearch;
    });

    if (filtered.length === 0) {
        grid.innerHTML = `<p style="color: var(--text-muted); grid-column: 1/-1; text-align: center;">${t('cmd_empty')}</p>`;
        return;
    }

    grid.innerHTML = filtered.map(cmd => `
        <div class="cmd-card" data-cmd="${cmd.name}">
            <div class="cmd-name">${cmd.name}</div>
            <div class="cmd-desc">${cmd.desc[currentLang] || cmd.desc.ru}</div>
            <div class="cmd-copied">${t('cmd_copied')}</div>
        </div>
    `).join('');

    grid.querySelectorAll('.cmd-card').forEach(card => {
        card.addEventListener('click', () => {
            const cmd = card.dataset.cmd.split(' ')[0];
            navigator.clipboard.writeText(cmd).then(() => {
                card.classList.add('copied');
                setTimeout(() => card.classList.remove('copied'), 1200);
            });
        });
    });
}

filters.forEach(btn => {
    btn.addEventListener('click', () => {
        filters.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.dataset.filter;
        renderCommands();
    });
});

if (search) {
    let searchTimer;
    search.addEventListener('input', (e) => {
        clearTimeout(searchTimer);
        searchTimer = setTimeout(() => {
            currentSearch = e.target.value.toLowerCase().trim();
            renderCommands();
        }, 150);
    });
}

// ---------- init ----------
const savedLang = localStorage.getItem('aimstar_lang')
    || (navigator.language.startsWith('ru') ? 'ru' : 'en');

setLang(savedLang);

// ---------- scroll animation ----------
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.feature-card, .step, .faq-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s, transform 0.5s';
    observer.observe(el);
});