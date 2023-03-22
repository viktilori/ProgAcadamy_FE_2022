const data = [
    { 
    "r030":36,"txt":"Австралійський долар","rate":24.4406,"cc":"AUD","exchangedate":"23.03.2023"
     }
    ,{ 
    "r030":124,"txt":"Канадський долар","rate":26.6817,"cc":"CAD","exchangedate":"23.03.2023"
     }
    ,{ 
    "r030":156,"txt":"Юань Женьміньбі","rate":5.3125,"cc":"CNY","exchangedate":"23.03.2023"
     }
    ,{ 
    "r030":203,"txt":"Чеська крона","rate":1.6614,"cc":"CZK","exchangedate":"23.03.2023"
     }
    ,{ 
    "r030":208,"txt":"Данська крона","rate":5.2936,"cc":"DKK","exchangedate":"23.03.2023"
     }
    ,{ 
    "r030":344,"txt":"Гонконгівський долар","rate":4.6595,"cc":"HKD","exchangedate":"23.03.2023"
     }
    ,{ 
    "r030":348,"txt":"Форинт","rate":0.101557,"cc":"HUF","exchangedate":"23.03.2023"
     }
    ,{ 
    "r030":356,"txt":"Індійська рупія","rate":0.44236,"cc":"INR","exchangedate":"23.03.2023"
     }
    ,{ 
    "r030":360,"txt":"Рупія","rate":0.0023814,"cc":"IDR","exchangedate":"23.03.2023"
     }
    ,{ 
    "r030":376,"txt":"Новий ізраїльський шекель","rate":10.0491,"cc":"ILS","exchangedate":"23.03.2023"
     }
    ,{ 
    "r030":392,"txt":"Єна","rate":0.27538,"cc":"JPY","exchangedate":"23.03.2023"
     }
    ,{ 
    "r030":398,"txt":"Теньге","rate":0.078749,"cc":"KZT","exchangedate":"23.03.2023"
     }
    ,{ 
    "r030":410,"txt":"Вона","rate":0.027966,"cc":"KRW","exchangedate":"23.03.2023"
     }
    ,{ 
    "r030":484,"txt":"Мексиканське песо","rate":1.9733,"cc":"MXN","exchangedate":"23.03.2023"
     }
    ,{ 
    "r030":498,"txt":"Молдовський лей","rate":1.9659,"cc":"MDL","exchangedate":"23.03.2023"
     }
    ,{ 
    "r030":554,"txt":"Новозеландський долар","rate":22.7164,"cc":"NZD","exchangedate":"23.03.2023"
     }
    ,{ 
    "r030":578,"txt":"Норвезька крона","rate":3.4792,"cc":"NOK","exchangedate":"23.03.2023"
     }
    ,{ 
    "r030":643,"txt":"Російський рубль","rate":0.47464,"cc":"RUB","exchangedate":"23.03.2023"
     }
    ,{ 
    "r030":702,"txt":"Сінгапурський долар","rate":27.4004,"cc":"SGD","exchangedate":"23.03.2023"
     }
    ,{ 
    "r030":710,"txt":"Ренд","rate":1.987,"cc":"ZAR","exchangedate":"23.03.2023"
     }
    ,{ 
    "r030":752,"txt":"Шведська крона","rate":3.5324,"cc":"SEK","exchangedate":"23.03.2023"
     }
    ,{ 
    "r030":756,"txt":"Швейцарський франк","rate":39.6193,"cc":"CHF","exchangedate":"23.03.2023"
     }
    ,{ 
    "r030":818,"txt":"Єгипетський фунт","rate":1.1832,"cc":"EGP","exchangedate":"23.03.2023"
     }
    ,{ 
    "r030":826,"txt":"Фунт стерлінгів","rate":44.866,"cc":"GBP","exchangedate":"23.03.2023"
     }
    ,{ 
    "r030":840,"txt":"Долар США","rate":36.5686,"cc":"USD","exchangedate":"23.03.2023"
     }
    ,{ 
    "r030":933,"txt":"Білоруський рубль","rate":13.2919,"cc":"BYN","exchangedate":"23.03.2023"
     }
    ,{ 
    "r030":944,"txt":"Азербайджанський манат","rate":21.549,"cc":"AZN","exchangedate":"23.03.2023"
     }
    ,{ 
    "r030":946,"txt":"Румунський лей","rate":8.0098,"cc":"RON","exchangedate":"23.03.2023"
     }
    ,{ 
    "r030":949,"txt":"Турецька ліра","rate":1.9205,"cc":"TRY","exchangedate":"23.03.2023"
     }
    ,{ 
    "r030":960,"txt":"СПЗ (спеціальні права запозичення)","rate":49.0513,"cc":"XDR","exchangedate":"23.03.2023"
     }
    ,{ 
    "r030":975,"txt":"Болгарський лев","rate":20.1613,"cc":"BGN","exchangedate":"23.03.2023"
     }
    ,{ 
    "r030":978,"txt":"Євро","rate":39.4264,"cc":"EUR","exchangedate":"23.03.2023"
     }
    ,{ 
    "r030":985,"txt":"Злотий","rate":8.4172,"cc":"PLN","exchangedate":"23.03.2023"
     }
    ,{ 
    "r030":12,"txt":"Алжирський динар","rate":0.26723,"cc":"DZD","exchangedate":"23.03.2023"
     }
    ,{ 
    "r030":50,"txt":"Така","rate":0.3458,"cc":"BDT","exchangedate":"23.03.2023"
     }
    ,{ 
    "r030":51,"txt":"Вірменський драм","rate":0.093925,"cc":"AMD","exchangedate":"23.03.2023"
     }
    ,{ 
    "r030":214,"txt":"Домініканське песо","rate":0.66051,"cc":"DOP","exchangedate":"23.03.2023"
     }
    ,{ 
    "r030":364,"txt":"Іранський ріал","rate":0.00087068,"cc":"IRR","exchangedate":"23.03.2023"
     }
    ,{ 
    "r030":368,"txt":"Іракський динар","rate":0.027915,"cc":"IQD","exchangedate":"23.03.2023"
     }
    ,{ 
    "r030":417,"txt":"Сом","rate":0.41831,"cc":"KGS","exchangedate":"23.03.2023"
     }
    ,{ 
    "r030":422,"txt":"Ліванський фунт","rate":0.002438,"cc":"LBP","exchangedate":"23.03.2023"
     }
    ,{ 
    "r030":434,"txt":"Лівійський динар","rate":7.5589,"cc":"LYD","exchangedate":"23.03.2023"
     }
    ,{ 
    "r030":458,"txt":"Малайзійський ринггіт","rate":8.1499,"cc":"MYR","exchangedate":"23.03.2023"
     }
    ,{ 
    "r030":504,"txt":"Марокканський дирхам","rate":3.5203,"cc":"MAD","exchangedate":"23.03.2023"
     }
    ,{ 
    "r030":586,"txt":"Пакистанська рупія","rate":0.13997,"cc":"PKR","exchangedate":"23.03.2023"
     }
    ,{ 
    "r030":682,"txt":"Саудівський ріял","rate":9.7441,"cc":"SAR","exchangedate":"23.03.2023"
     }
    ,{ 
    "r030":704,"txt":"Донг","rate":0.0015371,"cc":"VND","exchangedate":"23.03.2023"
     }
    ,{ 
    "r030":764,"txt":"Бат","rate":1.03433,"cc":"THB","exchangedate":"23.03.2023"
     }
    ,{ 
    "r030":784,"txt":"Дирхам ОАЕ","rate":9.9563,"cc":"AED","exchangedate":"23.03.2023"
     }
    ,{ 
    "r030":788,"txt":"Туніський динар","rate":11.6409,"cc":"TND","exchangedate":"23.03.2023"
     }
    ,{ 
    "r030":860,"txt":"Узбецький сум","rate":0.0032259,"cc":"UZS","exchangedate":"23.03.2023"
     }
    ,{ 
    "r030":901,"txt":"Новий тайванський долар","rate":1.19701,"cc":"TWD","exchangedate":"23.03.2023"
     }
    ,{ 
    "r030":934,"txt":"Туркменський новий манат","rate":10.4482,"cc":"TMT","exchangedate":"23.03.2023"
     }
    ,{ 
    "r030":941,"txt":"Сербський динар","rate":0.33086,"cc":"RSD","exchangedate":"23.03.2023"
     }
    ,{ 
    "r030":972,"txt":"Сомоні","rate":3.35,"cc":"TJS","exchangedate":"23.03.2023"
     }
    ,{ 
    "r030":981,"txt":"Ларі","rate":13.9965,"cc":"GEL","exchangedate":"23.03.2023"
     }
    ,{ 
    "r030":986,"txt":"Бразильський реал","rate":7.03,"cc":"BRL","exchangedate":"23.03.2023"
     }
    ,{ 
    "r030":959,"txt":"Золото","rate":70876.89,"cc":"XAU","exchangedate":"23.03.2023"
     }
    ,{ 
    "r030":961,"txt":"Срібло","rate":814.87,"cc":"XAG","exchangedate":"23.03.2023"
     }
    ,{ 
    "r030":962,"txt":"Платина","rate":36581.03,"cc":"XPT","exchangedate":"23.03.2023"
     }
    ,{ 
    "r030":964,"txt":"Паладій","rate":51939.85,"cc":"XPD","exchangedate":"23.03.2023"
     }
    ]

export default data;