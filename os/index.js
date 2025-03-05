const os = require('os');
require('dotenv').config();

function getOSInfo() {
    console.log('\n=== Информация о системе ===');
    console.table({
        'Платформа': os.platform(),
        'Свободная память': `${(os.freemem() / 1024 / 1024 / 1024).toFixed(2)} ГБ`,
        'Домашняя директория': os.homedir(),
        'Имя хоста': os.hostname()
    });
}

function checkFreeMemory() {
    const freeMemoryGB = os.freemem() / 1024 / 1024 / 1024;
    
    console.log('\n=== Проверка памяти ===');
    console.table({
        'Свободная память': `${freeMemoryGB.toFixed(2)} ГБ`,
        'Статус': freeMemoryGB > 4 ? 'более 4 ГБ' : 'менее или равно 4 ГБ'
    });
}

function checkAccessMode() {
    const mode = process.env.MODE || 'user';
    
    console.log('\n=== Проверка доступа ===');
    console.table({
        'Текущий режим': mode,
        'Результат': mode === 'да да я' ? 'Доступ разрешен' : 'Доступ запрещен'
    });

    if (mode === 'да да яn') {
        getOSInfo();
    }
}

checkAccessMode();
checkFreeMemory();
