// Star animation
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
document.querySelector('.stars').appendChild(canvas);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];
let numStars = 100;
const starSpeed = 0.7;

function initStars() {
    stars = []; // إعادة تعيين النجوم لتجنب تراكمها
    for (let i = 0; i < numStars; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            z: Math.random() * canvas.width
        });
    }
}

function moveStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < stars.length; i++) {
        stars[i].z -= starSpeed;
        if (stars[i].z <= 0) {
            stars[i].z = canvas.width;
        }

        const k = 128.0 / stars[i].z;
        const px = stars[i].x * k + canvas.width / 2;
        const py = stars[i].y * k + canvas.height / 2;

        if (px >= 0 && px <= canvas.width && py >= 0 && py <= canvas.height) {
            const size = (1 - stars[i].z / canvas.width) * 5;
            const shade = parseInt((1 - stars[i].z / canvas.width) * 255);
            ctx.fillStyle = `rgb(${shade}, ${shade}, 255)`;
            ctx.beginPath();
            ctx.arc(px, py, size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    requestAnimationFrame(moveStars);
}

initStars();
moveStars();

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initStars(); // إعادة تهيئة النجوم عند تغيير حجم النافذة
});


// منع النسخ
document.addEventListener('copy', function(e) {
    e.preventDefault();
});

// منع استخدام قائمة السياق (النقر بزر الفأرة الأيمن)
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

// منع تحديد النصوص
document.addEventListener('selectstart', function(e) {
    e.preventDefault();
});

document.addEventListener('keydown', function(e) {
    if ((e.ctrlKey && e.key === 'c') || (e.ctrlKey && e.key === 'v')) {
        e.preventDefault();
    }
});



// Updated data object
const universityData = {
'university1': [
        { department: 'التمريض', grade: 72, fee: 3000000 },
        { department: 'التحليلات المرضية', grade: 59, fee: 2880000 },
        { department: 'القانون', grade: 62, fee: 2160000 },
        { department: 'الدبلوماسية', grade: 57, fee: 2160000 },
        { department: 'اللغة الإنكليزية', grade: 57, fee: 2142000 },
        { department: 'علوم الحاسبات', grade: 57, fee: 2160000 },
        { department: 'تكنلوجات المعلومات', grade: 57, fee: 1989000 },
        { department: 'المحاسبة', grade: 55, fee: 2142000 },
        { department: 'إدارة الاعمال', grade: 55, fee: 2160000 }
    ],
    'university2': [
        { department: 'طب اسنان', grade: 87, fee: 8000000 },
        { department: 'صيدلية', grade: 81, fee: 8000000 },
        { department: 'تحليلات طبية', grade: 60, fee: 3500000 },
        { department: 'طب العيون', grade: 60, fee: 4000000 },
        { department: 'اشعة', grade: 60, fee: 4000000 },
        { department: 'هندسة بايوميديكال', grade: 72, fee: 3500000 },
        { department: 'هندسية البرمجيات', grade: 72, fee: 3500000 },
        { department: 'الموارد البشرية', grade: 55, fee: 2400000 },
        { department: 'إدارة الاعمال', grade: 55, fee: 2400000 },
        { department: 'تقنية المعلومات', grade: 57, fee: 3000000 }
    ],
    'university3': [
        { department: 'طب اسنان', grade: 87, fee: 7650000 },
        { department: 'صيدلة', grade: 81, fee: 7650000 },
        { department: 'تمريض', grade: 72, fee: 3400000 },
        { department: 'هندسة مدني', grade: 77, fee: 4000000 },
        { department: 'هندسة نفط', grade: 74, fee: 3500000 },
        { department: 'هندسة كومبيوتر', grade: 72, fee: 4000000 },
        { department: 'تكنولوجيا الاسنان', grade: 67, fee: 4300000 },
        { department: 'تحليلات مرضية', grade: 59, fee: 3060000 },
        { department: 'علوم كومبيوتر', grade: 57, fee: 1800000 },
        { department: 'علوم بايومديكال', grade: 59, fee: 3240000 },
        { department: 'لغة إنكليزي', grade: 57, fee: 2500000 },
        { department: 'إدارة اعمال', grade: 55, fee: 2900000 },
        { department: 'محاسبة', grade: 55, fee: 2900000 }
    ],
    'university4': [
        { department: 'هندسة معماري', grade: 77, fee: 3612500 },
        { department: 'قانون', grade: 62, fee: 2275000 },
        { department: 'علوم الحاسوب', grade: 57, fee: 2709000 },
        { department: 'تحليلات طبية مختبرية', grade: 59, fee: 2890000 },
        { department: 'تخدير', grade: 59, fee: 3400000 },
        { department: 'اللغة الإنكليزية', grade: 57, fee: 2307750 },
        { department: 'الترجمة', grade: 55, fee: 2307750 },
        { department: 'تربية عامة', grade: 55, fee: 2118250 },
        { department: 'اعلام وتسويق', grade: 55, fee: 2048250 },
        { department: 'المحاسبة', grade: 55, fee: 2048250 },
        { department: 'موارد بشرية', grade: 55, fee: 2048250 },
        { department: 'إدارة الاعمال', grade: 55, fee: 2048250 },
        { department: 'المحاسبة بتكنلوجيا معلومات', grade: 57, fee: 2048250 },
        { department: 'إدارة مالية ومصرف', grade: 55, fee: 2048250 }
    ],
    'university5': [
        { department: 'طب اسنان', grade: 87, fee: 9450000 },
        { department: 'صيدلة', grade: 81, fee: 9450000 },
        { department: 'الهندسة المعمارية', grade: 77, fee: 3978000 },
        { department: 'الهندسة المدنية', grade: 77, fee: 3825000 },
        { department: 'هندسة برمجيات ومعلومات', grade: 77, fee: 3443000 },
        { department: 'هندسة تصميم داخلي', grade: 77, fee: 2869000 },
        { department: 'تحليلات كيميائية طبية', grade: 55, fee: 3330000 },
        { department: 'تغذية وحميات', grade: 55, fee: 3375000 },
        { department: 'تمريض صحة مجتمع', grade: 55, fee: 3375000 },
        { department: 'علاج طبيعي', grade: 55, fee: 3375000 },
        { department: 'تقنيات تصوير الشعاعي', grade: 55, fee: 3510000 },
        { department: 'علوم طبية حيوية', grade: 59, fee: 3330000 },
        { department: 'احياء مجهرية طبية', grade: 59, fee: 3137000 },
        { department: 'علوم مختبرات طبية', grade: 59, fee: 3150000 },
        { department: 'علوم الحاسبات', grade: 57, fee: 2869000 },
        { department: 'قانون', grade: 62, fee: 2410000 },
        { department: 'علاقات دولية وسياسية', grade: 57, fee: 2410000 },
        { department: 'تربية بدنية ورياضة', grade: 55, fee: 1500000 },
        { department: 'تربية عامة', grade: 55, fee: 1800000 },
        { department: 'تصميم جرافيكي', grade: 57, fee: 2655000 },
        { department: 'اللغة الإنكليزية', grade: 57, fee: 2445000 },
        { department: 'الترجمة', grade: 55, fee: 2445000 },
        { department: 'الاعلام', grade: 55, fee: 1500000 },
        { department: 'إدارة الاعمال', grade: 55, fee: 2169000 },
        { department: 'محاسبة', grade: 55, fee: 2169000 },
        { department: 'إدارة موارد بشرية', grade: 55, fee: 1205000 },
        { department: 'الإدارة العامة', grade: 55, fee: 2169000 }
    ],
        'university6': [

      { department: 'صيدلة', grade: 81, fee: 8500000 },
        { department: 'تمريض', grade: 72, fee: 3400000 },
        { department: 'علم التخدير', grade: 59, fee: 3400000 },
        { department: 'تحليلات مرضية', grade: 59, fee: 2487000 },
        { department: 'الاحياء المجهرية الطبية', grade: 59, fee: 2487000 },
        { department: 'الكيمياء الحياتية السريرية', grade: 59, fee: 2487000 },
        { department: 'هندسة برمجيات ومعلومات', grade: 72, fee: 2975000 },
        { department: 'القانون', grade: 62, fee: 1700000 },
        { department: 'علوم الحاسبات', grade: 57, fee: 1696000 },
        { department: 'اللغة الإنكليزية – اداب', grade: 57, fee: 1696000 },
        { department: 'إدارة الاعمال', grade: 55, fee: 1696000 },
        { department: 'محاسبة', grade: 55, fee: 1696000 },
        { department: 'علوم مالية ومصرفية', grade: 55, fee: 1696000 },
        { department: 'تربية لغة إنكليزي – علم نفس', grade: 55, fee: 1488000 }
    ],
    'university7': [
        { department: 'صيدلة', grade: 81, fee: 10500000 },
        { department: 'هندسة نفط', grade: 74, fee: 1912500 },
        { department: 'هندسة حاسبات', grade: 72, fee: 1875000 },
        { department: 'هندسة بيئة', grade: 67, fee: 0 },
        { department: 'تحليلات مرضية', grade: 59, fee: 3400000 },
        { department: 'مايكروبايولوجي طبي', grade: 59, fee: 3400000 },
        { department: 'علوم حاسبات', grade: 57, fee: 1450000 },
        { department: 'قانون', grade: 62, fee: 2400000 },
        { department: 'علاقات دولية', grade: 57, fee: 0 },
        { department: 'اللغة الإنكليزية', grade: 57, fee: 2250000 },
        { department: 'إدارة اعمال', grade: 55, fee: 1125000 },
        { department: 'محاسبة', grade: 55, fee: 1125000 },
        { department: 'علوم مالية ومصرفية', grade: 55, fee: 0 },
        { department: 'تسويق', grade: 55, fee: 0 }
    ],
    'university8': [
        { department: 'طب اسنان', grade: 87, fee: 0 },
        { department: 'صيدلة', grade: 81, fee: 0 },
        { department: 'تمريض', grade: 72, fee: 0 },
        { department: 'هندسة معماري', grade: 77, fee: 5219839 },
        { department: 'هندسة مدني', grade: 77, fee: 3667641 },
        { department: 'هندسة كومبيوتر', grade: 72, fee: 0 },
        { department: 'هندسة تصميم داخلي', grade: 72, fee: 0 },
        { department: 'هندسة مساح وجيوماتكس', grade: 72, fee: 4715539 },
        { department: 'هندسة نفط', grade: 74, fee: 2423263 },
        { department: 'هندسة ميكاترونكس', grade: 72, fee: 4715539 },
        { department: 'هندسة طيران', grade: 72, fee: 3274680 },
        { department: 'هندسة بيتروكيماويات', grade: 72, fee: 2423263 },
        { department: 'تقنيات المعلومات أي تي', grade: 57, fee: 0 },
        { department: 'تحليلات مرضية', grade: 59, fee: 0 },
        { department: 'علاج طبيعي', grade: 55, fee: 3209186 },
        { department: 'قانون', grade: 62, fee: 2872549 },
        { department: 'علاقات دولية', grade: 57, fee: 3251102 },
        { department: 'تربية إنكليزي', grade: 57, fee: 3396498 },
        { department: 'تربية رياضيات', grade: 57, fee: 1726411 },
        { department: 'تربية فيزياء', grade: 57, fee: 3251102 },
        { department: 'تربية احياء', grade: 59, fee: 3251102 },
        { department: 'تربية كومبيوتر', grade: 55, fee: 2438981 },
        { department: 'تربية كوردي', grade: 57, fee: 1309872 },
        { department: 'إدارة اعمال', grade: 55, fee: 3479020 },
        { department: 'محاسبة', grade: 55, fee: 3252412 },
        { department: 'مالية وبنوك', grade: 55, fee: 1739510 },
        { department: 'سياحة', grade: 55, fee: 626118 },
        { department: 'تسويق وعمل', grade: 55, fee: 1739510 }
    ],
    'university9': [
        { department: 'هندسة معماري', grade: 77, fee: 3915207 },
        { department: 'هندسة مدني', grade: 77, fee: 2505785 },
        { department: 'هندسة كومبيوتر', grade: 72, fee: 2960310 },
        { department: 'هندسة تصميم داخلي', grade: 72, fee: 2786097 },
        { department: 'علاقات دولية', grade: 57, fee: 1625551 },
        { department: 'تقنية المعلومات', grade: 57, fee: 2260839 },
        { department: 'تربية إنكليزية', grade: 57, fee: 1698903 },
        { department: 'إدارة اعمال', grade: 55, fee: 2087935 },
        { department: 'محاسبة', grade: 55, fee: 1950399 },
        { department: 'بنوك', grade: 55, fee: 1877046 }
    ],
  'university10': [
        { department: 'هندسة معماري', grade: 77, fee: 4250000 },
        { department: 'هندسة مدني', grade: 77, fee: 4250000 },
        { department: 'هندسة كومبيوتر', grade: 72, fee: 3850000 },
        { department: 'هندسة برمجيات', grade: 72, fee: 3500000 },
        { department: 'قانون', grade: 62, fee: 2100000 },
        { department: 'علوم سياسية', grade: 57, fee: 2450000 },
        { department: 'علوم كومبيوتر', grade: 57, fee: 2350000 },
        { department: 'تصميم الكرافيك', grade: 57, fee: 2350000 },
        { department: 'اللغة الإنكليزية', grade: 57, fee: 2300000 },
        { department: 'ترجمة', grade: 55, fee: 2300000 },
        { department: 'دراسات كوردية', grade: 55, fee: 1500000 },
        { department: 'اللغة الكوردية', grade: 57, fee: 1500000 },
        { department: 'اللغة الفرنسية', grade: 55, fee: 0 },
        { department: 'علم النفس', grade: 55, fee: 0 },
        { department: 'إدارة الاعمال', grade: 55, fee: 2220000 },
        { department: 'إدارة الاعلام وصحافة', grade: 55, fee: 0 },
        { department: 'الاقتصاد', grade: 55, fee: 1920000 },
        { department: 'علوم مالية ومصرفية', grade: 55, fee: 2150000 },
        { department: 'محاسبة', grade: 55, fee: 2220000 },
        { department: 'علوم سياحية', grade: 55, fee: 2075000 },
        { department: 'تسويق', grade: 55, fee: 2100000 }
    ],
'university11': [
        { department: 'تمريض', grade: 72, fee: 3187500 },
        { department: 'صيدلة', grade: 81, fee: 6990225 },
        { department: 'علوم مختبرات الطبية', grade: 59, fee: 1750000 },
        { department: 'هندسة معماري', grade: 77, fee: 2125000 },
        { department: 'هندسة مدني', grade: 77, fee: 2000000 },
        { department: 'تكنولوجيا علوم الحاسبات', grade: 57, fee: 1750000 },
        { department: 'علاقات دولية', grade: 57, fee: 1500000 },
        { department: 'اللغة الانجليزية', grade: 57, fee: 1500000 },
        { department: 'اعلام رقمي', grade: 55, fee: 1500000 },
        { department: 'ادارة الاعمال', grade: 55, fee: 1250000 },
        { department: 'محاسبة', grade: 55, fee: 1500000 }
    ],

  'university12': [
        { department: 'تقنية المعلومات اي تي', grade: 57, fee: 1520000 },
        { department: 'قانون', grade: 62, fee: 1400000 },
        { department: 'لغة انكليزي', grade: 57, fee: 1400000 },
        { department: 'محاسبة', grade: 55, fee: 1200000 },
        { department: 'تربية اسلامية', grade: 55, fee: 1440000 },
        { department: 'اديان', grade: 55, fee: 1200000 }
    ],
    
    
    
    'university13': [
        { department: 'قانون', grade: 62, fee: 1600000 },
        { department: 'تقنية المعلومات اي تي', grade: 57, fee: 1800000 },
        { department: 'لغة انكليزية', grade: 57, fee: 1600000 },
        { department: 'ادارة اعمال', grade: 55, fee: 1600000 },
        { department: 'محاسبة', grade: 55, fee: 1600000 },
        { department: 'مالية وبنوك', grade: 55, fee: 1600000 },
        { department: 'ادارة صحية', grade: 55, fee: 1920000 },
        { department: 'مقارنة الاديان', grade: 55, fee: 1000000 },
        { department: 'تربية إسلامية', grade: 55, fee: 1000000 }
    ],

    'university14': [
        { department: 'هندسة معماري', grade: 77, fee: 2800000 },
        { department: 'هندسة مدني', grade: 77, fee: 2820000 },
        { department: 'قانون', grade: 62, fee: 1500000 },
        { department: 'علاقات دولية دبلوماسية', grade: 57, fee: 1100000 },
        { department: 'علوم كومبيوتر', grade: 57, fee: 1100000 },
        { department: 'لغة انكليزي', grade: 57, fee: 1500000 },
        { department: 'ادارة اعمال', grade: 55, fee: 1400000 },
        { department: 'محاسبة', grade: 55, fee: 1400000 },
        { department: 'مالية ومصارف', grade: 55, fee: 1100000 }
    ]

      
    // Add more university data objects here...
};



// Function to display data in the table
function displayData(university) {
    const tbody = document.getElementById('data-body');
    tbody.innerHTML = '';

    if (university && universityData[university]) {
        universityData[university].forEach(entry => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${entry.department}</td>
                <td>${entry.grade}</td>
                <td>${entry.fee.toLocaleString()}</td>
            `;
            tbody.appendChild(row);
        });
        document.getElementById('data-table-container').style.display = 'block';
    } else {
        document.getElementById('data-table-container').style.display = 'none';
    }
}

// Function to show notification message
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.classList.add('hide');
        setTimeout(() => {
            notification.remove();
        }, 500); // Match the duration of the slideUp animation
    }, 3000); // Display for 3 seconds
}

// Event listener for button click
document.getElementById('show-data-btn').addEventListener('click', function() {
    const selectedUniversity = document.getElementById('university-select').value;
    if (selectedUniversity) {
showNotification(` ${document.querySelector(`#university-select option[value="${selectedUniversity}"]`).textContent}`);    }
    displayData(selectedUniversity);
});


const menuButton = document.getElementById('menu-button');
    const sideMenu = document.getElementById('side-menu');
    
    // فتح القائمة الجانبية عند الضغط على زر القائمة
    menuButton.addEventListener('click', () => {
        sideMenu.classList.toggle('open');
    });

    // إغلاق القائمة الجانبية عند النقر في أي مكان داخل الموقع
    document.addEventListener('click', (e) => {
        if (!sideMenu.contains(e.target) && e.target !== menuButton) {
            sideMenu.classList.remove('open');
        }
    });

    // دالة لفتح صفحات الويب عند النقر على أزرار القائمة
    function openPage(url) {
        window.open(url, '_blank');
    }

    // استماع لحدث النقر على أزرار القائمة وفتح الصفحات المناسبة
    sideMenu.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', () => {
            const url = button.dataset.url;
            if (url) {
                openPage(url);
            }
        });
 

 });
function openPage(url) {
    window.location.href = url;
}


