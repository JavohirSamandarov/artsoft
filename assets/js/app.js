const segmentsMap = document.querySelectorAll('.segmentsMap_pin');
const videoSrc = document.querySelector('#srcVideo');
const content = document.querySelector('.segmentsMapZona');
const content_bg = document.querySelector('#content-bg');
const section_video = document.querySelector('#section-video');
const popUp = document.querySelector('.segmentsMapVideo-content');
const back = document.querySelector('.backtoMap');
const popUp_text = document.querySelector('#popUp-text');
const popUp_desc = document.querySelector('#popUp-dec');
const burger = document.querySelector('.burger-menu');
const modal = document.querySelector('.modal');

const dataContent = {
        one:{
            title: 'Молочно-товарная ферма',
            desc: 'Одна из крупнейших молочно-товарных ферм в Республике Беларусь. Уникальный проект с применением современных технологий в управлении производственным процессом. Использование европейских практик направлено на создание максимального комфорта для животных.',
            videoPath: './assets/images/activity-images/segments-video/segments-1.mp4'
        },
        two:{
            title: 'Производство мяса птицы',
            desc: 'Сегмент включает два современных птицеводческих комплекса: ЗАО «Серволюкс Агро» и ОАО «Смолевичи Бройлер».Высокие показатели эффективности по выращиванию и переработке птицы достигнуты за счет внедрения лучших европейских практик и собственных разработок.Производственные площадки максимально автоматизированы и обеспечивают 100%-прослеживаемость каждой партии.Продукция выпускается под брендом «Петруха».',
            videoPath: './assets/images/activity-images/segments-video/segments-2.mp4'
        },
        three:{
            title: 'Управляющая компания СЗАО «Серволюкс»',
            desc: 'Серволюкс – крупнейший вертикально-интегрированный холдинг агропромышленного рынка СНГ. Группа объединяет более 20 компаний с офисами в 3 странах. Производственная структура включает птицеводческие комплексы, комбикормовые заводы и элеваторы, мясоперерабатывающие предприятия и земельный банк.',
            videoPath: './assets/images/activity-images/segments-video/segments-3.mp4'
        },
        four:{
            title: 'Ритейл',
            desc: 'Региональная мультиформатная сеть розничной торговли в Республике Беларусь. Представлена гастрономами «Квартал вкуса», объектами фирменной торговли «Петруха» и специализированными магазинами «Мясновъ».',
            videoPath: './assets/images/activity-images/segments-video/segments-4.mp4'
        },
        five:{
            title: 'Комбикормовое производство',
            desc: 'Лидер комбикормового рынка Республики Беларусь. Производит высококачественные сбалансированные комбикорма, БВМД и премиксы для всех видов сельскохозяйственных животных. На производственных площадках установлены высокотехнологичные линии ведущих европейских компаний, новые зерноочистительно-сушильные комплексы и дополнительные элеваторные емкости для хранения зерна и белкового сырья.',
            videoPath: './assets/images/activity-images/segments-video/segments-5.mp4'
        },
        six:{
            title: 'Глубокая переработка мяса птицы',
            desc: 'Инфраструктура переработки состоит из трех мясоперерабатывающих комплексов. Сегмент выпускает три основные категории продуктов: полуфабрикаты из мяса птицы, готовые кулинарные изделия и мясоколбасная продукция. Производственные площадки оснащены инновационным оборудованием в области производства продуктов питания.',
            videoPath: './assets/images/activity-images/segments-video/segments-6.mp4'
        },
        seven:{
            title: 'Научно-исследовательский инжиниринговый центр',
            desc: 'Первый в Республике Беларусь широкопрофильный комплекс европейского уровня по исследованию и разработке продуктов питания, технологий и новых подходов в производстве.Является партнерской платформой по поиску новых решений для международных клиентов канала HoReCa.',
            videoPath: './assets/images/activity-images/segments-video/segments-7.mp4'
        },
        eight:{
            title: 'Племенное птицеводство',
            desc: 'Современные площадки для выращивания цыплят бройлеров. Производственная инфраструктура состоит из фабрик родительского стада, инкубаторов, птичников. Показатели эффективности данного направления соответствуют уровню ведущих мировых производителей. ',
            videoPath: './assets/images/activity-images/segments-video/segments-8.mp4'
        },
        nine:{
            title: 'Мясопереработка (Российская Федерация)',
            desc: 'Новый производственный актив в Сергиевом Посаде (Российская Федерация). Оснащен современным оборудованием для разделки и переработки мяса птицы. Одно из стратегических направлений развития – производство продуктов для международных клиентов канала HoReCa: KFC, Dodo и др.',
            videoPath: './assets/images/activity-images/segments-video/segments-9.mp4'
        },
        ten:{
            title: 'Торговое представительство (Российская Федерация)',
            desc: 'Торговое представительство Группы компаний «Серволюкс». Занимается продвижением и реализацией продукции на территории Российской Федерации и экспортных рынках. Включает собственный распределительный центр. Является партнером крупнейших российских ритейлеров. Имеет e-commerce площадку с собственной логистикой по Москве и Московской области.',
            videoPath: './assets/images/activity-images/segments-video/segments-10.mp4'
        }
}

section_video.style.display = 'none';
for(let i=0; i < segmentsMap.length; i++){
    segmentsMap[i].addEventListener('click', ()=> {
        // console.log(segmentsMap[i].getAttribute('data-src'));
        // section_video.children[0]['src'] =segmentsMap[i].getAttribute('data-src')
        const elementId = segmentsMap[i].getAttribute('id')
        const elementVideo = dataContent[elementId]['videoPath']
        const elementTitle = dataContent[elementId]['title']
        const elementDesc = dataContent[elementId]['desc']

        popUp_text.textContent = elementTitle
        popUp_desc.textContent = elementDesc

        section_video.children[0]['src'] = elementVideo
        section_video.style.display = 'block';
        content.style.display = 'none';
        content_bg.style.display = 'none';
        section_video.pause();
        section_video.load();
        section_video.play()
        
        back.addEventListener('click', ()=>{
            popUp.style.transform = 'translateX(100%)';
            section_video.style.display = 'none';
            content.style.display = 'block';
            content_bg.style.display = 'block';
        })

    })
}
function videoEnd(){
    popUp.style.transform = 'translateX(0%)';
}

// Mission section swiper Js
const swiper = new Swiper(".mySwiper", {
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: 50,
    // slidesPerGroup: 1,
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
        clickable: true
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


burger.addEventListener('click', () => {
    modal.style.transform = 'translateY(0%)';
})