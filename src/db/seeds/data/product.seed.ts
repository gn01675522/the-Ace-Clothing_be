import { GENDER_CLASSES } from 'src/db/model/auxiliary/gender/gender.aux.types';
import { PRODUCT_CATEGORY_CLASSES } from 'src/db/model/auxiliary/product_category/product_category.aux.types';

export const productSeed = [
  {
    name: '棕色寬版皮帶',
    gender: GENDER_CLASSES.neutral,
    category: PRODUCT_CATEGORY_CLASSES.belt,
    features: ['馬鞍皮', '不鏽鋼', '棕色'],
    description:
      '我們的棕色寬版皮帶以其深邃的棕色為您的穿著增添一份高雅與成熟的氣質。寬版的設計不僅時尚而且實用，無論是搭配寬鬆的上衣，或是突顯您的曲線，都能輕易達成。皮質光滑柔軟，質地耐用，不論是日常出行還是特殊場合都十分適用。',
    img_urls: [
      'https://i.imgur.com/paQbvz3.jpg',
      'https://i.imgur.com/9EJlWab.jpg',
      'https://i.imgur.com/Z49Ugyk.jpg',
    ],
    recycled: false,
  },
  {
    name: '火山石串珠手鍊',
    gender: GENDER_CLASSES.neutral,
    category: PRODUCT_CATEGORY_CLASSES.bracelet,
    features: ['火山石', '水晶', '檀木'],
    description:
      '健康、財富、平靜，是這款手鍊的設計初衷。材料有火山石、天然石水晶、及壇木三種；火山石，可打通堵塞的血液、調治消化系統、燃燒多餘脂肪，起到排毒養顏強身健體的功效；天然石水晶可辟邪、抵禦負能量及淨化磁場。壇木則可以幫助事業發展，並起到穩定情緒及安神的效果。',
    img_urls: [
      'https://i.imgur.com/vnRf5Vd.jpg',
      'https://i.imgur.com/83cUDzC.jpg',
      'https://i.imgur.com/ZlHQK2f.jpg',
    ],
    recycled: false,
  },
  {
    name: '孔雀石串珠手鍊',
    gender: GENDER_CLASSES.neutral,
    category: PRODUCT_CATEGORY_CLASSES.bracelet,
    features: ['孔雀石'],
    description:
      '這款美麗的串珠手鍊主要為孔雀石製作，寓意為高貴、平安、幸福及希望，我們希望可以透過這個串珠手鍊，讓配戴者能夠獲得上述的祝福！孔雀石功效有驅邪避凶、安撫情緒及開發智慧的功用，再加上我們精挑細選的礦石品項，相信光是注視著它，就能感受到滿滿的能量及療癒。',
    img_urls: [
      'https://i.imgur.com/qJowqTs.jpg',
      'https://i.imgur.com/WWTW0Ln.jpg',
      'https://i.imgur.com/J34bLWa.jpg',
    ],
    recycled: false,
  },
  {
    name: '銅製鎸刻十字架項鍊',
    gender: GENDER_CLASSES.neutral,
    category: PRODUCT_CATEGORY_CLASSES.necklace,
    features: ['銅', '不鏽鋼', '銅色'],
    description:
      '這款「銅製鎸刻十字架項鍊」由高質量的銅材製成，自然的銅色展現出一種古典且典雅的魅力。而鎸刻的十字架不僅增添了它的細節層次，也給人一種深沉而神秘的感覺。無論是在日常生活中還是在特殊場合配戴，都能突出您的個性風格並吸引眾人的目光。如果您正在尋找一款獨特而帶有深意的飾品，那麼這款「銅製鎸刻十字架項鍊」將是您的最佳選擇。無論是作為一件時尚的配飾，還是作為一種信仰的象徵，它都將與您形成獨特的連結。',
    img_urls: [
      'https://i.imgur.com/AZHM0vd.jpg',
      'https://i.imgur.com/0AqjVCH.jpg',
      'https://i.imgur.com/h5YWv6U.jpg',
    ],
    recycled: false,
  },
  {
    name: '飛車黨頭巾',
    gender: GENDER_CLASSES.neutral,
    category: PRODUCT_CATEGORY_CLASSES.covering,
    features: ['尼龍', '紅色', '', ''],
    description:
      '這款「飛車黨頭巾」以鮮明的紅色作為主要顏色，讓您在人群中立刻成為焦點。而獨特的圖騰設計則充分展現了無畏和自由的風格，透露出您的非凡個性。無論是騎摩托車、進行運動還是參加戶外活動，這款頭巾都能為您提供適合的風格與保護。作為一種時尚配件，「飛車黨頭巾」不僅能增添您的個性魅力，更能作為實用的頭部保護用具，同時，其圖騰設計也可以作為您展現個性的方式，讓我們一同釋放您的內在狂野。',
    img_urls: [
      'https://i.imgur.com/6Irim18.jpg',
      'https://i.imgur.com/BVmC89B.jpg',
      'https://i.imgur.com/p6eCgZv.jpg',
    ],
    recycled: false,
  },
  {
    name: '灰色棉質圍巾',
    gender: GENDER_CLASSES.neutral,
    category: PRODUCT_CATEGORY_CLASSES.covering,
    features: ['100%棉', '灰色'],
    description:
      '這款「灰色棉質圍巾」以優雅的灰色為基調，結合柔軟的棉質材料，帶給您最舒適的體驗。其時尚而低調的色調能夠輕易配搭各種衣著風格，無論是休閒還是正式的場合，都能展現您的高雅品味。此外，其優質的棉質材料提供了出色的保暖性能，讓您在寒冷的冬季中感到溫暖。擁有這款「灰色棉質圍巾」，您將享受到無與倫比的舒適感受與優雅風範。',
    img_urls: [
      'https://i.imgur.com/8dj8RCt.jpg',
      'https://i.imgur.com/GP2djMM.jpg',
      'https://i.imgur.com/08YlOWU.jpg',
    ],
    recycled: false,
  },
  {
    name: '銀製情侶對戒',
    gender: GENDER_CLASSES.neutral,
    category: PRODUCT_CATEGORY_CLASSES.ring,
    features: ['純銀', '銀色'],
    description:
      '這款「銀製情侶對戒」是以瑩亮的銀色作為基調，閃耀著典雅又時尚的光芒。每一個細節都充分展現了銀色的魅力，既有豐富的光澤，又充滿細膩的感染力，讓人一見鍾情。這款對戒對於情侶來說，無疑是一個完美的選擇。它不僅代表著彼此的深深情感，更是對愛情最真誠的承諾。每一個獨特的紋理，都在述說著屬於你們的愛情故事。',
    img_urls: [
      'https://i.imgur.com/AQeqR9d.jpg',
      'https://i.imgur.com/eHtcNiE.jpg',
      'https://i.imgur.com/Yrvg785.jpg',
    ],
    recycled: false,
  },
  {
    name: '黑色費多拉帽',
    gender: GENDER_CLASSES.male,
    category: PRODUCT_CATEGORY_CLASSES.hat,
    features: ['高品質棉', '黑'],
    description:
      '這款自 18 世紀從法國發跡的費多拉帽，至今過了兩世紀，依舊在時尚潮流佔有一席之地。由高品質的材料製成，經典的帽體，搭配純黑底色，為你的搭配清單內，添加了既優雅又紳士的氛圍。無論您是參加正式場合還是隨意出門，戴上這款帽子絕對讓人讚嘆你獨樹一格的品味。',
    img_urls: [
      'https://i.imgur.com/ekF5zm0.jpg',
      'https://i.imgur.com/sopvZmW.jpg',
      'https://i.imgur.com/icwXcxg.jpg',
    ],
    recycled: false,
  },
  {
    name: '橘色毛帽',
    gender: GENDER_CLASSES.male,
    category: PRODUCT_CATEGORY_CLASSES.hat,
    features: ['100%棉', '橘色'],
    description:
      '這款帽子以獨特的深橘色為設計主色調，這種顏色不僅鮮明耀眼，且能與各種顏色的衣物搭配，為您的冬季衣著增添亮點。此外，我們使用高品質的毛線材料，為您提供極致的舒適度和保暖性能。我們的精心設計，既可作為功能性的暖冬配件，也可作為提升您整體風格的時尚單品。它是您面對寒冷天氣的理想選擇，並能在您的衣櫃中佔有一席之地。',
    img_urls: [
      'https://i.imgur.com/3qrW32C.jpg',
      'https://i.imgur.com/Gu4SMwg.jpg',
      'https://i.imgur.com/taVEBuQ.jpg',
    ],
    recycled: false,
  },
  {
    name: '純黑漁夫帽',
    gender: GENDER_CLASSES.male,
    category: PRODUCT_CATEGORY_CLASSES.hat,
    features: ['100%棉', '純黑'],
    description:
      '漁夫帽一直都在街頭風格的搭配清單裡面，我們使用優質的純黑色布料製成，設計簡約，讓你搭配上更加靈活。其寬邊設計不僅具有良好的遮陽效果，也因其形狀之故，而帶有一絲神秘感，種種特性為您的整體造型增加了濃厚的時尚元素。它適合各種場合，無論您是去海邊度假還是市區的逛街，這款漁夫帽都能成為您的理想選擇。',
    img_urls: [
      'https://i.imgur.com/jgvc7VT.jpg',
      'https://i.imgur.com/mRtqq57.jpg',
      'https://i.imgur.com/HP2aPOW.jpg',
    ],
    recycled: false,
  },
  {
    name: 'II 米色鴨舌帽',
    gender: GENDER_CLASSES.male,
    category: PRODUCT_CATEGORY_CLASSES.hat,
    features: ['100%棉', '米色'],
    description:
      '這款鴨舌帽以柔和的米色為主色調，給人一種溫暖舒適的感覺。其前面刺繡著獨特的羅馬數字 "II" 圖案，為整體設計添加了一種簡約而不失時尚感的元素。採用高品質的布料，質地柔軟舒適，並且能為您提供良好的保護和遮陽效果。無論是進行運動還是日常配戴，都能為您提供一種簡單且時尚的裝扮選擇。',
    img_urls: [
      'https://i.imgur.com/YfUw1Uj.jpg',
      'https://i.imgur.com/HARVfUm.jpg',
      'https://i.imgur.com/fZqyLI6.jpg',
    ],
    recycled: false,
  },
  {
    name: '暗藍八角報童帽',
    gender: GENDER_CLASSES.male,
    category: PRODUCT_CATEGORY_CLASSES.hat,
    features: ['100%棉', '暗藍'],
    description:
      '報童帽的起源是在十八世紀起至二十世紀初，歐洲比如愛爾蘭、義大利等各個國家開始大量移民美國；而大量的移民所造成的社會問題增加，其中以孤兒、棄嬰等問題尤為嚴重，這些被時代浪潮所犧牲的孩子長大後，靠擦鞋及送報維生，他們工作時所戴的就是這款八角形的帽子。這是有點沉重的歷史，但在時代的進步，原先代表低層生活特徵的帽子，一躍而上成為時尚注目焦點。結合歐洲文化，及大移民時代的歷史底蘊；這款縱橫至今數世紀屹立不搖的單品配件，你一定會喜歡！',
    img_urls: [
      'https://i.imgur.com/2gM8IiQ.jpg',
      'https://i.imgur.com/5HR28Yo.jpg',
      'https://i.imgur.com/N8vfxCv.jpg',
    ],
    recycled: false,
  },
  {
    name: '純黑鴨舌帽',
    gender: GENDER_CLASSES.neutral,
    category: PRODUCT_CATEGORY_CLASSES.hat,
    features: ['100%棉', '純黑'],
    description:
      '這款鴨舌帽的設計簡潔，純黑的顏色能夠搭配各種服裝風格，無論是休閒、運動還是街頭風格，都能輕鬆駕馭。它的經典造型不會被時間淘汰，越是簡單普遍的單品，越是能混入你個人風格當中。無論是春夏秋冬，它都能成為您衣櫥中不可或缺的一部分。',
    img_urls: [
      'https://i.imgur.com/wUZYDct.jpg',
      'https://i.imgur.com/phzy7nm.jpg',
      'https://i.imgur.com/N7YF8cc.jpg',
    ],
    recycled: false,
  },
  {
    name: '純白鴨舌帽',
    gender: GENDER_CLASSES.neutral,
    category: PRODUCT_CATEGORY_CLASSES.hat,
    features: ['100%棉', '純白'],
    description:
      '這款鴨舌帽的設計簡潔，純白的顏色能夠搭配各種服裝風格，無論是休閒、運動還是街頭風格，都能輕鬆駕馭。它的經典造型不會被時間淘汰，越是簡單普遍的單品，越是能混入你個人風格當中。無論是春夏秋冬，它都能成為您衣櫥中不可或缺的一部分。',
    img_urls: [
      'https://i.imgur.com/JrjxZQK.jpg',
      'https://i.imgur.com/V1N6iBB.jpg',
      'https://i.imgur.com/xqVbSQX.jpg',
    ],
    recycled: false,
  },
  {
    name: '巴拿馬草帽',
    gender: GENDER_CLASSES.female,
    category: PRODUCT_CATEGORY_CLASSES.hat,
    features: ['100%植物', '自然色'],
    description:
      '這款來自中南美洲，因美國前總統羅斯福而聞名的帽子，是我們最新推出的夏季新品。這款帽子以自然色的草繩手工編織而成，每一頂帽子都握著匠人的汗水與熱情。它的顏色柔和，透露出一種悠閒與自在的感覺，帶給您舒適的頭部覆蓋，同時也能為您的街頭風格注入一絲異國情調。它象徵著對生活的熱愛，對自由的追求，以及對時尚的理解。帶上它，讓我們在繁忙的生活中找到一絲悠閒與寧靜，感受那份來自於巴拿馬草帽的獨特魅力。',
    img_urls: [
      'https://i.imgur.com/sa5pewS.jpg',
      'https://i.imgur.com/iGo6u2u.jpg',
      'https://i.imgur.com/fDRE8pd.jpg',
    ],
    recycled: false,
  },
  {
    name: 'Bohemian 編織波浪遮陽帽',
    gender: GENDER_CLASSES.female,
    category: PRODUCT_CATEGORY_CLASSES.hat,
    features: ['100%棉', '自然色'],
    description:
      '自然色的草繩編織而成，帶有細膩的木耳邊設計，浪漫、優雅、不受拘束是我們的設計目的。帽子的顏色溫暖而柔和，讓您在炎炎夏日中感到涼爽舒適。而獨特的波浪邊設計，更是給帽子增添了幾分女性的優雅和甜美。好久沒去郊外踏青了嗎？讓這頂帽子成為你走出去的動力，享受那久違的陽光與草地吧。',
    img_urls: [
      'https://i.imgur.com/2duGqFh.jpg',
      'https://i.imgur.com/QIwK9rT.jpg',
      'https://i.imgur.com/admthl1.jpg',
    ],
    recycled: false,
  },
  {
    name: '棕色貝雷帽',
    gender: GENDER_CLASSES.female,
    category: PRODUCT_CATEGORY_CLASSES.hat,
    features: ['100%棉', '棕色'],
    description:
      '受到了法國風情的啟發，我們設計的這款貝雷帽，充滿了藝術及浪漫氛圍。暖色系基底，無論配搭任何服裝都能讓妳感受到前所未有的寧靜感。這頂貝雷帽，對於任何喜歡以服裝來表達自己獨特性格的女性來說，都是一個絕佳的選擇。它不僅具風格感，還具有藝術氣息，讓你在眾人中脫穎而出。',
    img_urls: [
      'https://i.imgur.com/RhG224X.jpg',
      'https://i.imgur.com/GviZcqf.jpg',
      'https://i.imgur.com/UXOddJ4.jpg',
    ],
    recycled: false,
  },
  {
    name: '針織米色毛帽',
    gender: GENDER_CLASSES.female,
    category: PRODUCT_CATEGORY_CLASSES.hat,
    features: ['100%棉', '米白色'],
    description:
      '這款米色的針織毛帽，是我們秋冬系列中的明星商品。這頂毛帽由優質的針織物料製成，柔和的米白色，給人一種溫暖而舒適的感覺。它的設計簡單卻不失時尚感，可以與您的任何冬季服裝完美搭配。不論是在清晨的運動時、逛街購物，還是晚間的聚會，它都能為您提供適合的保暖。此外，其經典的米色更讓它容易與您的各種衣物配搭，為您的日常裝扮增添一抹溫馨的色彩。',
    img_urls: [
      'https://i.imgur.com/LBK5OC0.jpg',
      'https://i.imgur.com/5h5eF1O.jpg',
      'https://i.imgur.com/GolihJS.jpg',
    ],
    recycled: false,
  },
  {
    name: '蝴蝶印花漁夫帽',
    gender: GENDER_CLASSES.female,
    category: PRODUCT_CATEGORY_CLASSES.hat,
    features: ['100%棉', '白色'],
    description:
      '夏天到了，花季的關係，蝴蝶也漸漸活躍了起來！翩翩起舞的蝴蝶，頂多兩三個月的壽命，卻在她有限的時間內，綻放出最美麗的色彩。這款因設計師一次健行，看見滿山滿谷的蝴蝶，靈感併發下而生的帽子，想要傳達給妳的是，希望種種限制把妳困住，也不要忘記像蝴蝶一樣綻放自己的光彩。以白色為基底，亮藍、亮橘等鮮艷顏色的蝴蝶妝點出的帽子，除了非常適合夏天這個季節之外，更適合那美麗，且想要努力綻放著的妳。',
    img_urls: [
      'https://i.imgur.com/zQqgekz.jpg',
      'https://i.imgur.com/u7XlNPg.jpg',
      'https://i.imgur.com/o7UB8Fg.jpg',
    ],
    recycled: false,
  },
  {
    name: '小破壞牛仔褲',
    gender: GENDER_CLASSES.male,
    category: PRODUCT_CATEGORY_CLASSES.bottom,
    features: ['100%棉', '中筒', '藍黑'],
    description:
      '來自街頭風格，其核心設計理念在於表達自由不羈的精神。在左右褲管膝蓋上方刻意設計的破洞，猶如時尚的烙印，不僅展現出獨特的視覺效果，也象徵著穿著者的個性和獨立精神。深藍色調為這款牛仔褲注入了一種深沉而神秘的氣質，讓您在日常穿著中自然散發出個人的風格和態度。',
    img_urls: [
      'https://i.imgur.com/Z0gQXeg.jpg',
      'https://i.imgur.com/Y1PToyh.jpg',
      'https://i.imgur.com/lYsbgxo.jpg',
    ],
    recycled: false,
  },
  {
    name: '直筒水洗牛仔褲',
    gender: GENDER_CLASSES.male,
    category: PRODUCT_CATEGORY_CLASSES.bottom,
    features: ['100%棉', '寬鬆', '淺藍混白'],
    description:
      '淺藍混白的色調，隨興與經典完美結合。整體的設計源於經典的工作服風格，結實耐穿的面料與實用性，讓這款牛仔褲顯得簡潔而不凡。讓你的每一步，都充滿了信心和力量。',
    img_urls: [
      'https://i.imgur.com/OLsf5lj.jpg',
      'https://i.imgur.com/aaKuHkq.jpg',
      'https://i.imgur.com/lgUJERG.jpg',
    ],
    recycled: false,
  },
  {
    name: '米白寬版工作褲',
    gender: GENDER_CLASSES.male,
    category: PRODUCT_CATEGORY_CLASSES.bottom,
    features: ['100%棉', '10%聚酰胺', '中筒', '米白'],
    description:
      '你是否對一般主流嘻哈穿著感到厭煩？不羈及自由的靈魂不應該被條條框框拘束著。這款米白色調的工作褲恰到好處地結合了簡約、時尚；不只百搭，還可與嘻哈裝扮完美融合。只有不受制約，才能獲得真正的自由。',
    img_urls: [
      'https://i.imgur.com/hkVhXTL.jpg',
      'https://i.imgur.com/cVCyOGG.jpg',
      'https://i.imgur.com/8tQSSM3.jpg',
    ],
    recycled: false,
  },
  {
    name: '灰色貼身牛仔褲',
    gender: GENDER_CLASSES.male,
    category: PRODUCT_CATEGORY_CLASSES.bottom,
    features: ['100%棉', '修身', '灰色'],
    description:
      '無需花哨的裝飾或奇特的設計，這款灰色貼身牛仔褲的簡約風格就能呈現出您內在的獨立與自信。每一次穿著，每一次走動，都彷彿是在講述您自己的故事，散發出個人的風格與態度。精選彈力布料，讓合身的版型卻有著寬鬆版型的舒適感，讓您表達個性與風格的同時，還可以有著非常舒適的穿著體驗。',
    img_urls: [
      'https://i.imgur.com/uoo64NS.jpg',
      'https://i.imgur.com/YbX79AP.jpg',
      'https://i.imgur.com/RzZb2uz.jpg',
    ],
    recycled: false,
  },
  {
    name: '純黑色直筒牛仔褲',
    gender: GENDER_CLASSES.male,
    category: PRODUCT_CATEGORY_CLASSES.bottom,
    features: ['100%棉', '直筒', '黑'],
    description:
      '不受制約、不妥協，是我們對自由的定義！經典不敗的黑色，以及極簡的外觀，讓您不管在休閒、商務等各種場合都能應對自如；你不用再想煩惱每天出門要怎麼搭配，你也不用因為一件不合適的褲子而妥協不穿那件放在衣櫃已久，你很喜歡的上衣！釋放你的頭腦，讓頭腦能專注在對您更有價值的地方，自由就是不用選擇，而擁有一件百搭的褲子是你邁向自由的第一步，而這之後每一步，都將充滿了自由和獨立的精神。\n',
    img_urls: [
      'https://i.imgur.com/ISlSNFb.jpg',
      'https://i.imgur.com/Jfwal8U.jpg',
      'https://i.imgur.com/PIt5hhC.jpg',
    ],
    recycled: false,
  },
  {
    name: '藍色修身縮口棉褲',
    gender: GENDER_CLASSES.male,
    category: PRODUCT_CATEGORY_CLASSES.bottom,
    features: ['100%棉', '修身縮口', '深藍'],
    description:
      '受夠了一般無聊的棉褲，以及那手機放進去感覺會隨時掉出來的口袋？我們獨家設計的棉褲，相信會改變您對棉褲的看法。猶如夜空一般深邃神秘的深藍色調，呈現出與眾不同且神祕的氛圍！深具功能性的口袋的設計，讓您穿著時不再有市面上口袋過淺而造成的不安全感；加上拉鍊所提供的保護，讓你能夠放心的從事任何活動！如果你只能買一條褲子，那麼這條絕對是你唯一選擇。',
    img_urls: [
      'https://i.imgur.com/2r56hZ9.jpg',
      'https://i.imgur.com/p72Vt8r.jpg',
      'https://i.imgur.com/5MvQ163.jpg',
    ],
    recycled: false,
  },
  {
    name: '深灰色工裝滑板褲',
    gender: GENDER_CLASSES.male,
    category: PRODUCT_CATEGORY_CLASSES.bottom,
    features: ['100%棉', '寬鬆', '深灰'],
    description:
      '不怕你摔的耐磨布料，讓你能夠一次又一次的挑戰自我；多重口袋所帶來的額外儲物空間，讓整體功能性更上升一個層次。整體設計映射著滑板文化起源，以及讓人回想起加州滑板文化爆發的 70 及 80 年代，如鋼鐵一般堅韌的深灰色調，彷彿揮灑著挑戰規則的勇氣，完美詮釋出街頭文化的精神。',
    img_urls: [
      'https://i.imgur.com/Jdv92AX.jpg',
      'https://i.imgur.com/ZB9N7qo.jpg',
      'https://i.imgur.com/iOFkcNe.jpg',
    ],
    recycled: false,
  },
  {
    name: '休閒英倫風格紋長褲',
    gender: GENDER_CLASSES.male,
    category: PRODUCT_CATEGORY_CLASSES.bottom,
    features: ['53%棉', '47%聚酰氨', '中筒', '灰色'],
    description:
      '這款長褲的細條紋設計，賦予它一種典雅的美感。無論是走在街頭還是處於辦公室，這種低調的格紋設計都能讓你保持優雅的風範，並在細節中展現出你的獨特個性與氣質。縱向的細條紋更是巧妙地延伸了視覺效果，使得褲子更加修身，同時也為你的身材加分。搭配任何上衣都能顯出它的風格與優雅，讓你在日常生活中自然散發出英倫的獨特魅力。',
    img_urls: [
      'https://i.imgur.com/3gtAnPJ.jpg',
      'https://i.imgur.com/gTeaqkR.jpg',
      'https://i.imgur.com/OaXPf0Q.jpg',
    ],
    recycled: false,
  },
  {
    name: '白色橫條縮口滑板褲',
    gender: GENDER_CLASSES.male,
    category: PRODUCT_CATEGORY_CLASSES.bottom,
    features: ['59%棉質', '41%聚酰氨', '中筒', '黑色'],
    description:
      '我們總是堅信，衣服不僅是遮體的工具，更是表達自我和風格的工具。我們這款白色橫條縮口滑板褲，以基調的黑色，配上五條粗大的白色橫條紋，強烈的對比色彩突出了滑板文化的叛逆和自由。這款白色橫條縮口滑板褲，不僅保留了滑板褲的舒適性和實用性，還在設計上注入了強烈的街頭元素。無論你是在滑板公園，還是在城市街頭，它都能讓你在眾多滑板者中脫穎而出。\n',
    img_urls: [
      'https://i.imgur.com/aw4LPwl.jpg',
      'https://i.imgur.com/USZVljz.jpg',
      'https://i.imgur.com/gbIaP8I.jpg',
    ],
    recycled: false,
  },
  {
    name: '小破壞直筒牛仔褲',
    gender: GENDER_CLASSES.male,
    category: PRODUCT_CATEGORY_CLASSES.bottom,
    features: ['100%棉', '直筒', '淺藍'],
    description:
      '在右邊褲管的膝蓋處，一個刻意的破洞猶如隨風飄揚的旗帜，向世界展現你的個性和態度。左邊褲管大腿和膝蓋處的兩個破洞，像是時尚的烙印，代表你不按牌理出牌的自由精神。這些破洞，不僅為這款牛仔褲帶來獨特的視覺效果，也象徵著穿著者對於生活的獨特見解和勇往直前的精神。我們讓你的衣著反映你的內心。這款淺藍色小破壞直筒牛仔褲，是你對於生活的自由詮釋，是你對於時尚的獨立主張。來選擇我們，讓你的風格在街頭獨樹一幟，讓你的精神自由不羈。',
    img_urls: [
      'https://i.imgur.com/w4mdOFR.jpg',
      'https://i.imgur.com/r0iVqia.jpg',
      'https://i.imgur.com/b03UWaJ.jpg',
    ],
    recycled: false,
  },
  {
    name: '白色短褲',
    gender: GENDER_CLASSES.male,
    category: PRODUCT_CATEGORY_CLASSES.bottom,
    features: ['100%棉', '短褲', '純白'],
    description:
      '這款白色短褲是完美的夏日必備，其純白色調為你的日常風格注入了清新氣息。它搖曳生姿的白色襯托出你的陽光活力，就像海灘上的金色沙粒一樣炫目。無論是在海灘上享受陽光，還是在城市街頭漫步，這款白色短褲都能讓你自然而然地散發出獨特的風格與態度。',
    img_urls: [
      'https://i.imgur.com/zRYsYOB.jpg',
      'https://i.imgur.com/eDYdTcV.jpg',
      'https://i.imgur.com/cJw1Nij.jpg',
    ],
    recycled: false,
  },
  {
    name: '黑色破洞修身長褲',
    gender: GENDER_CLASSES.male,
    category: PRODUCT_CATEGORY_CLASSES.bottom,
    features: ['100%棉', '窄管', '純黑'],
    description:
      '這款純黑色的修身長褲，其獨特的破洞設計在兩側膝蓋處刻意呈現出時尚的烙印，窄管設計讓整體視覺更加幹練、修身，讓你能駕馭任何的穿著搭配。它像黑夜中的閃光，深邃而神秘，隨著步態的起伏，時而隱藏，時而綻放，讓你在街頭漫步中散發出獨特的風格與態度。',
    img_urls: [
      'https://i.imgur.com/PwTHj82.jpg',
      'https://i.imgur.com/2ojncrq.jpg',
      'https://i.imgur.com/mwroCYV.jpg',
    ],
    recycled: false,
  },
  {
    name: 'Urban 棕色商務感休閒大衣',
    gender: GENDER_CLASSES.male,
    category: PRODUCT_CATEGORY_CLASSES.top,
    features: ['100%棉', '修身', '棕色'],
    description:
      '這款大衣將簡潔與商務風格完美融合，展現出專業而低調的個性。簡單又不簡單的版型設計，搭配典雅而不失風範的剪裁，將簡潔與風度融為一體，在繁忙的現代社會，成為抓住眼球最佳單品。',
    img_urls: [
      'https://i.imgur.com/PJvb916.jpg',
      'https://i.imgur.com/M1IJ5Yf.jpg',
      'https://i.imgur.com/BLGexjz.jpg',
    ],
    recycled: false,
  },
  {
    name: '骷髏短T (男)',
    gender: GENDER_CLASSES.male,
    category: PRODUCT_CATEGORY_CLASSES.top,
    features: ['100%棉', '正常', '純黑'],
    description:
      '這款純黑色的短T，與眾不同的是，其正面中央印有一個大膽且叛逆的骷髏圖案，將不羈和自由的精神展現得淋漓盡致。這款短T既帶有一種強烈的視覺效果，又充滿了個性化的設計感。不論是去 party，還是參加音樂節，或是日常的街頭穿著，這款骷髏短T都能讓你在人群中脫穎而出，展現出自己獨特的潮流感。更重要的是，它不僅有型，更是舒適，適合各種活動與場合。',
    img_urls: [
      'https://i.imgur.com/qOZVybj.jpg',
      'https://i.imgur.com/AIvwXqU.jpg',
      'https://i.imgur.com/L3uqOtA.jpg',
    ],
    recycled: false,
  },
  {
    name: '水洗輕磅牛仔外套',
    gender: GENDER_CLASSES.male,
    category: PRODUCT_CATEGORY_CLASSES.top,
    features: ['100%棉', '正常', '藍'],
    description:
      '藍色的牛仔外套是街頭風格中的標誌性單品，這款牛仔外套為你的風格注入了一種經典且永恆的元素。我們的牛仔外套使用了水洗工藝，賦予其深淺不一的獨特色調，讓每一件都呈現出不同的個性。這款外套的設計簡單卻不失格調，能夠輕鬆搭配你的任何衣物，無論是簡單的白T恤還是個性滿分的印花上衣，都能展現出你獨一無二的風格。不管你身在何處，都可以讓自己在眾人中脫穎而出，並享受時尚的樂趣。選擇我們的牛仔外套，表達你的自由精神和獨立態度。',
    img_urls: [
      'https://i.imgur.com/aTIDBT6.jpg',
      'https://i.imgur.com/4s6PdUB.jpg',
      'https://i.imgur.com/I1KRRUT.jpg',
    ],
    recycled: false,
  },
  {
    name: '西南風格棕色夾克',
    gender: GENDER_CLASSES.male,
    category: PRODUCT_CATEGORY_CLASSES.top,
    features: ['100%棉', '寬鬆', '棕色'],
    description:
      "以悠悠的西部曠野為靈感，配色、版型皆以早期美國西南部的穿著風格為借鑑；復古的棕色為你的造型增添了一種沉穩而獨特的元素，仿佛故事中的西部遊牧者，顯露出那份自由不羈的精神，無論是與朋友外出探險，還是在城市街頭漫步，都能讓你自然散發出獨特的風格與態度。喜歡那粗曠、野性的早期 70's 年代的朋友們，千萬別錯過此款夾克。",
    img_urls: [
      'https://i.imgur.com/Qm3vEni.jpg',
      'https://i.imgur.com/k49zl4y.jpg',
      'https://i.imgur.com/sBcjl4d.jpg',
    ],
    recycled: false,
  },
  {
    name: 'Urban 灰色商務感棉質大衣',
    gender: GENDER_CLASSES.male,
    category: PRODUCT_CATEGORY_CLASSES.top,
    features: ['100%棉', '寬鬆', '灰'],
    description:
      '這款大衣採用了中灰色調，如商務人士的利落形象，優雅且富有力量。它象徵著您的堅定與決心，無論在任何情況下，都能展現出無懈可擊的專業精神。配上黑色圍巾和淺灰色西裝褲，這款大衣將您的商務裝扮提升到新的高度。',
    img_urls: [
      'https://i.imgur.com/DdCEYiJ.jpg',
      'https://i.imgur.com/tR47Oim.jpg',
      'https://i.imgur.com/J6Rc4OJ.jpg',
    ],
    recycled: false,
  },
  {
    name: '黑底印花襯衫',
    gender: GENDER_CLASSES.male,
    category: PRODUCT_CATEGORY_CLASSES.top,
    features: ['100%棉', '合身', '黑色'],
    description:
      '這款短袖襯衫以黑色為底，氛圍取自南美古巴襯衫，其豐富的印花設計，使得這款襯衫從視覺上展現出一種活力四溢、充滿生機的氛圍，除此之外還給人一種隨性且時尚的感覺。即使在炎炎夏日，也能帶給您清涼舒適的穿著體驗。我們的黑底印花襯衫，適合追求獨特風格和輕鬆自在生活的您。營造出一種時尚而不做作的休閒風格。',
    img_urls: [
      'https://i.imgur.com/gtrujx6.jpg',
      'https://i.imgur.com/rS3c9KJ.jpg',
      'https://i.imgur.com/S0CjKlU.jpg',
    ],
    recycled: false,
  },
  {
    name: 'Urban 酒紅壓紋中領毛衣',
    gender: GENDER_CLASSES.male,
    category: PRODUCT_CATEGORY_CLASSES.top,
    features: ['100%棉', '合身', '酒紅'],
    description:
      '許多人會擔心只穿一件毛衣會不會很單調？此款毛衣就是為了解決這個問題而生！中領設計，讓衣服所帶來的外顯元素向上延伸，就算你是短髮也能讓整體造型不呆滯，毛衣的整體設計為壓紋直條紋，為您帶來溫暖同時，更呈現出細緻的質感與不單調的層次感，進一步增強了穿著者的優雅與大方，顯現出低調的時尚感和優雅的風範。',
    img_urls: [
      'https://i.imgur.com/GzroTgf.jpg',
      'https://i.imgur.com/LalBxwb.jpg',
      'https://i.imgur.com/UKvgi7Z.jpg',
    ],
    recycled: false,
  },
  {
    name: 'Urban 英倫風西裝外套',
    gender: GENDER_CLASSES.male,
    category: PRODUCT_CATEGORY_CLASSES.top,
    features: ['100%棉', '合身', '灰'],
    description:
      '細緻的設計和優雅的樣式，這款英倫風格的西裝外套，絕對能滿足您對英倫風格的想像！我們選用的是淡灰色調，並在其上加入了細緻的白色紋路，細緻的紋路縱橫交錯，在不失優雅與簡潔的同時，增添了一絲微妙的視覺層次感，使得整體的設計更為活潑而又不失其優雅的氣息。這款外套無論是用於商務還是休閒場合，都能輕鬆地配搭並顯現出您的個性風格。無論是搭配正裝褲還是牛仔褲，它都能讓您的穿著更加出色。',
    img_urls: [
      'https://i.imgur.com/NEoQ61l.jpg',
      'https://i.imgur.com/pcDWMtN.jpg',
      'https://i.imgur.com/FFduwgf.jpg',
    ],
    recycled: false,
  },
  {
    name: 'Urban 黑色中領毛衣',
    gender: GENDER_CLASSES.male,
    category: PRODUCT_CATEGORY_CLASSES.top,
    features: ['100%棉', '合身', '純黑'],
    description:
      '這款純黑的中領毛衣，擁有極簡的設計風格，完全釋放出您內在的個性和品味。深色調的設計不僅顯瘦，而且給人一種神秘的感覺，使您在人群中脫穎而出。中領的設計，給予您暖和舒適的穿著體驗，同時也添加了一絲時尚感。我們理解到每一種風格都值得被欣賞與表達，我們的服裝就是您表達自己風格的工具。這款黑色中領毛衣就是一種簡單，卻又能強烈表達個人風格的選擇。',
    img_urls: [
      'https://i.imgur.com/o9P3cnO.jpg',
      'https://i.imgur.com/MnXGSK0.jpg',
      'https://i.imgur.com/hnxienA.jpg',
    ],
    recycled: false,
  },
  {
    name: '街頭風刷毛外套',
    gender: GENDER_CLASSES.male,
    category: PRODUCT_CATEGORY_CLASSES.top,
    features: ['100%棉', '寬鬆', '灰'],
    description:
      '這款灰色的街頭風刷毛外套，展現了我們對於簡單而紮實的設計理念。實際穿著與外觀印象一致，仿佛包裹在一片輕輕的雲彩中，保暖度極高，讓您即使在寒冷的天氣中也能保持溫暖。灰色調，帶給您一種低調但卻絕不掉隊的流行感，版型設計不經意地融入了街頭文化的獨立與不羈，除了增添了活力與年輕的元素之外，也無意間彰顯出屬於街頭風的隨意與自由。',
    img_urls: [
      'https://i.imgur.com/3BWdxi2.jpg',
      'https://i.imgur.com/rzst1K8.jpg',
      'https://i.imgur.com/Gu0DYlp.jpg',
    ],
    recycled: false,
  },
  {
    name: '大圖騰長袖 T-Shirt',
    gender: GENDER_CLASSES.male,
    category: PRODUCT_CATEGORY_CLASSES.top,
    features: ['45%棉質、55%聚酰氨', '寬鬆', '黑'],
    description:
      '這款黑色大圖騰長袖T-Shirt，將街頭風格與圖騰藝術巧妙地融合在一起。大圖騰的設計猶如藝術的印記，搶眼而具視覺衝擊力。正面背面都裝飾有大圖騰，包含文字、幾何圖案，以及一個人頭，象徵著自由與獨特的精神態度。除此之外，兩邊的袖子上也描繪著大圖騰，形狀元素的圖案更是巧妙地將整件衣服的風格拉升到了極致。',
    img_urls: [
      'https://i.imgur.com/vwLs7GQ.jpg',
      'https://i.imgur.com/RWtLTZO.jpg',
      'https://i.imgur.com/A1L0KFq.jpg',
    ],
    recycled: false,
  },
  {
    name: '牛仔襯衫',
    gender: GENDER_CLASSES.male,
    category: PRODUCT_CATEGORY_CLASSES.top,
    features: ['100%棉', '合身', '亮藍綠'],
    description:
      '這款牛仔襯衫以其亮眼的藍綠色調打破傳統，為您的日常造型添加一抹清新的色彩。衣服的設計細節充滿男性魅力，胸前兩個口袋和黑色的扣子形成了獨特的視覺對比，同時也提供了實用性。無論是搭配休閒牛仔褲還是配上簡單的T恤，都能展現出您的個性和風格。',
    img_urls: [
      'https://i.imgur.com/xqLdpeS.jpg',
      'https://i.imgur.com/AHbpKoZ.jpg',
      'https://i.imgur.com/RhMknWj.jpg',
    ],
    recycled: false,
  },
  {
    name: '皮革仿舊牛仔靴',
    gender: GENDER_CLASSES.male,
    category: PRODUCT_CATEGORY_CLASSES.shoe,
    features: ['100%牛皮', '中筒', '皮革'],
    description:
      '獨家設計，堅韌並充滿彈力的鞋底，以及我們特別研發的彈力筒身設計，解決了許多中筒鞋的磨腳問題，讓你日常走路、翻山越嶺都能游刃有餘。使用 100% 純牛皮所製造的鞋身，借鑒了經典黃靴造型；顏色方面我們選擇保留了大多原生皮革顏色，為的就是要呈現一種野性美，並加上我們獨家的 relic 舊化技巧，讓這雙鞋子的整體呈現更有底蘊。',
    img_urls: [
      'https://i.imgur.com/j0XBFkm.jpg',
      'https://i.imgur.com/WovuDLb.jpg',
      'https://i.imgur.com/rvVhhWF.jpg',
    ],
    recycled: false,
  },
  {
    name: '高筒黑色皮革軍靴',
    gender: GENDER_CLASSES.male,
    category: PRODUCT_CATEGORY_CLASSES.shoe,
    features: ['100%牛皮', '高筒', '黑色'],
    description:
      '採用優質的黑色皮革製作，兼具耐用和舒適性；高筒設計不僅提供額外的腳踝支持，還可讓您在任何天氣條件下都能保持風格。精工細作的鞋面帶來光澤，不需多言，也能讓人感受到您不妥協的精神。此外，鞋底厚實、防滑，無論您在城市街頭還是戶外徒步，都能提供穩定的步態。',
    img_urls: [
      'https://i.imgur.com/jnw2rxX.jpg',
      'https://i.imgur.com/v6okHSG.jpg',
      'https://i.imgur.com/VimMbWv.jpg',
    ],
    recycled: false,
  },
  {
    name: '短版西部牛仔靴',
    gender: GENDER_CLASSES.female,
    category: PRODUCT_CATEGORY_CLASSES.shoe,
    features: ['100%牛皮', '中筒', '淺藍'],
    description:
      '這款靴子由上選牛皮皮革製成，耐用性絕佳，穿上後的感覺絕對是你從未體會過的舒適。靴子的設計靈感來自於經典的西部牛仔靴，荒野、仙人掌、硬漢、這就是我們想要傳達給你的感覺。顏色主體為深棕色；特意營造的粗曠感，與加在鞋子上段的勾釘形成一種反差。更加細節的是我們精美的縫線工藝，及細心的收邊，相信不用多說，你一定會被這雙靴子驚豔到！',
    img_urls: [
      'https://i.imgur.com/qYZcVmK.jpg',
      'https://i.imgur.com/ZkCXcRL.jpg',
      'https://i.imgur.com/emztvCV.jpg',
    ],
    recycled: false,
  },
  {
    name: '水洗超彈力直筒牛仔褲',
    gender: GENDER_CLASSES.female,
    category: PRODUCT_CATEGORY_CLASSES.bottom,
    features: ['100%棉', '直筒', '淺藍'],
    description:
      '這款女士牛仔褲以其淺藍色的洗水顏色和舒適的直筒設計，為您的日常穿著提供無與倫比的風格和舒適感。這條褲子使用了超彈力的牛仔布料，不僅可以完美貼合您的身型，同時也允許您自由活動，無論是在辦公室還是在週末的閒暇時光，都能讓您感到舒適自在。',
    img_urls: [
      'https://i.imgur.com/ianlJjJ.jpg',
      'https://i.imgur.com/OKHTt9q.jpg',
      'https://i.imgur.com/P7uwT3B.jpg',
    ],
    recycled: false,
  },
  {
    name: '黑色A字裙',
    gender: GENDER_CLASSES.female,
    category: PRODUCT_CATEGORY_CLASSES.bottom,
    features: ['100%棉', 'A字裙', '純黑'],
    description:
      '這款純黑色的A字裙擁有經典的設計和流行的剪裁。它的A形剪裁將完美地塑造你的身材曲線，同時提供充足的活動空間。裙子的純黑色使其成為一個極易配搭的單品，無論是和露肩上衣還是短款T恤，都能展現出不同的風格。即便設計的低調且簡單，但是卻充滿著無盡的風格和優雅。',
    img_urls: [
      'https://i.imgur.com/IPninkX.jpg',
      'https://i.imgur.com/UmXQxQc.jpg',
      'https://i.imgur.com/Gm3Wo1i.jpg',
    ],
    recycled: false,
  },
  {
    name: '直筒灰色條紋長褲',
    gender: GENDER_CLASSES.female,
    category: PRODUCT_CATEGORY_CLASSES.bottom,
    features: ['100%棉', '直筒', '灰'],
    description:
      '優雅的灰色調，搭配若隱若現的交錯條紋，讓整件單品具有獨特的風格和個性。其直筒的剪裁設計使得這款褲子既能夠提供舒適的穿著體驗，同時也能突顯出穿搭者的時尚感。它無論是與襯衫、T恤或是毛衣搭配，都能展現出低調的優雅。',
    img_urls: [
      'https://i.imgur.com/JtU0nf1.jpg',
      'https://i.imgur.com/vTfKzaw.jpg',
      'https://i.imgur.com/GZwD6e3.jpg',
    ],
    recycled: false,
  },
  {
    name: '彈力修身棉褲',
    gender: GENDER_CLASSES.female,
    category: PRODUCT_CATEGORY_CLASSES.bottom,
    features: ['100%棉', '修身', '純黑'],
    description:
      '這款「彈力修身棉褲」的最大特色就在於其極致的舒適度和出色的修身效果。採用高品質的棉質布料，賦予這款褲子出色的透氣性和吸濕性，而優秀的彈力則讓其可以完美貼合您的身形，展現出獨特的曲線美。雖然這款褲子沒有顯著的裝飾，但純黑的色調卻讓它成為了各種風格的穿搭的理想選擇。您可以搭配流行的T恤，也可以選擇簡單的襯衫，或者更是可以與短款外套合搭，每一種方式都能讓您顯示出不同的風格和個性。',
    img_urls: [
      'https://i.imgur.com/3CAjPpn.jpg',
      'https://i.imgur.com/hHjojZ1.jpg',
      'https://i.imgur.com/DEswLBZ.jpg',
    ],
    recycled: false,
  },
  {
    name: '千鳥格裙',
    gender: GENDER_CLASSES.female,
    category: PRODUCT_CATEGORY_CLASSES.bottom,
    features: ['100%棉', '正常', '黑白'],
    description:
      '這款裙子採用了經典的黑白千鳥格設計，黑色的基調與白色的紋路交織出獨特而時尚的視覺效果，為您的造型增添了層次感和節奏感。這款裙子的長度剛好在膝蓋上方，恰到好處的露出修長的腿部，濃濃的復古風和高雅的風格設計，讓您的優雅和性感得以完美的展現。無論您是要參加正式的聚會，還是日常的街頭漫步，這款裙子都能讓您成為眾人矚目的焦點。',
    img_urls: [
      'https://i.imgur.com/Cp913tr.jpg',
      'https://i.imgur.com/HnAfOng.jpg',
      'https://i.imgur.com/epURSn1.jpg',
    ],
    recycled: false,
  },
  {
    name: 'Bohemian 碎花紡紗長裙',
    gender: GENDER_CLASSES.female,
    category: PRODUCT_CATEGORY_CLASSES.bottom,
    features: ['100%棉', '長裙', '紅黑'],
    description:
      '豐富的紅色為基底，散落著鮮明對比的黑色碎花圖案，呈現出濃烈而激情的視覺效果。紡紗的材質，輕薄透氣，為您帶來無與倫比的穿著舒適度。經過精心設計出的波希米亞氛圍，使得裙子充滿了浪漫與自由的氣息，無論是在沙灘上，還是在街頭巷尾，都能讓您展現出個人獨特的風格和魅力。',
    img_urls: [
      'https://i.imgur.com/0u9UPaq.jpg',
      'https://i.imgur.com/ztQ5ORb.jpg',
      'https://i.imgur.com/asgEWrh.jpg',
    ],
    recycled: false,
  },
  {
    name: 'Bohemian 繡花雪紡紗洋裝',
    gender: GENDER_CLASSES.female,
    category: PRODUCT_CATEGORY_CLASSES.bottom,
    features: ['100%棉', '寬鬆', '純白'],
    description:
      '純白色的，潔淨無暇的設計，彷彿凝聚了所有的純真與浪漫。繡花的細節與雪紡紗的組合，使得這款洋裝在純白的基調上添加了更多的立體感和層次感，而這種細膩的手法也使其更為高雅與溫馨。精心設計的波希米亞風格，更是將這款洋裝的浪漫與自由的氛圍推向了極致。',
    img_urls: [
      'https://i.imgur.com/F4GUWbW.jpg',
      'https://i.imgur.com/ZiGDHXO.jpg',
      'https://i.imgur.com/gRXCuib.jpg',
    ],
    recycled: false,
  },
  {
    name: '側綁格紋短裙',
    gender: GENDER_CLASSES.female,
    category: PRODUCT_CATEGORY_CLASSES.bottom,
    features: ['100%棉', '短裙', '淺藍綠'],
    description:
      '夏季漸漸來到，豔陽的活力瀰漫在整個都市當中，這款我們精心設計的短裙就是為了此時而生。淺藍綠的選色，讓炎熱的夏日也能擁有清新簡潔的感受；裙子側綁設計，除了增加獨特性之外，更能反映穿搭者的俏皮活潑。',
    img_urls: [
      'https://i.imgur.com/m5QZmBr.jpg',
      'https://i.imgur.com/KSBQwQA.jpg',
      'https://i.imgur.com/mC5SMV8.jpg',
    ],
    recycled: false,
  },
  {
    name: '英倫風西裝長褲',
    gender: GENDER_CLASSES.female,
    category: PRODUCT_CATEGORY_CLASSES.bottom,
    features: ['100%棉', '合身', '灰色'],
    description:
      '淺灰底色搭配細緻條紋所呈現出的優雅格紋，以及獨家設計的修身剪裁，完美詮釋英倫風格中的沉穩優雅，及成熟知性。妳期待一條褲子能帶給妳什麼？不管為何，我們精心設計的英倫風西裝長褲都能帶給妳無與倫比的著裝體驗！',
    img_urls: [
      'https://i.imgur.com/8ZzH5vn.jpg',
      'https://i.imgur.com/bKTcGjW.jpg',
      'https://i.imgur.com/Wp7ZNE2.jpg',
    ],
    recycled: false,
  },
  {
    name: 'Bohemian 浪漫百褶長裙',
    gender: GENDER_CLASSES.female,
    category: PRODUCT_CATEGORY_CLASSES.bottom,
    features: ['100%棉', '長裙', '粉白'],
    description:
      '繁忙的工作，緊湊的生活，妳有多久沒有體驗到那無憂無慮感受？借鑑於70年代興起的波希米亞風格，自由不受拘束，是我們設計此款長裙的初衷。其精緻的百褶設計，不僅令人感到愉悅，也增加了裙子的層次感和流動感。粉白色的選擇使其顯得甜美且極具女性化。這款裙子能讓你在任何場合，都能保持著輕鬆且充滿風情的氣質。遵循自己內心的聲音，暫時隔絕那令人窒息車水馬龍的生活，穿上這件長裙去海邊散散心吧！',
    img_urls: [
      'https://i.imgur.com/PCMPb2B.jpg',
      'https://i.imgur.com/KesVF3E.jpg',
      'https://i.imgur.com/q7NLwLY.jpg',
    ],
    recycled: false,
  },
  {
    name: '森林風碎花紡紗長裙',
    gender: GENDER_CLASSES.female,
    category: PRODUCT_CATEGORY_CLASSES.bottom,
    features: ['100%棉', '長裙', '淺綠'],
    description:
      '淺綠色的紡紗長裙融入了大自然的氣息，宛如森林的精靈般獨特。淺綠色為裙子提供了一種清新而寧靜的基調，而裙面的碎花圖案又增添了一種田園般的甜美和活潑。透明的紡紗質地使得整件裙子顯得更加輕盈和夢幻，這款裙子能夠在任何場合，讓你顯得清新自然且極具吸引力。',
    img_urls: [
      'https://i.imgur.com/Bvr0jTg.jpg',
      'https://i.imgur.com/pruw3Kv.jpg',
      'https://i.imgur.com/nIU6TbD.jpg',
    ],
    recycled: false,
  },
  {
    name: '90s 高腰牛仔短褲',
    gender: GENDER_CLASSES.female,
    category: PRODUCT_CATEGORY_CLASSES.bottom,
    features: ['100%棉', '短版', '淺藍'],
    description:
      '相較於 70 及 80 年代的誇張浮華，簡約又不失自我主義的風格才是 90 年代的主流。這款牛仔短褲，是為了獻給嚮往那被譽為最美好年代的您。以牛仔布為基調，搭配復古的版型，完美呈現 90 年代年輕人不受約束的態度。有些東西永遠不應該過時，相信即便妳沒經歷過該年代，也能透過這件短褲感受到美好 90 年代所代表的精神。',
    img_urls: [
      'https://i.imgur.com/5JWiaZm.jpg',
      'https://i.imgur.com/580u1eL.jpg',
      'https://i.imgur.com/8Va3kgr.jpg',
    ],
    recycled: false,
  },
  {
    name: '休閒條紋 T-Shirt',
    gender: GENDER_CLASSES.female,
    category: PRODUCT_CATEGORY_CLASSES.top,
    features: ['100%棉', '合身', '黑白'],
    description:
      '這款 T-Shirt 的設計簡單而經典，白色底色配以黑色條紋，為你帶來一種隨性而又時尚的感覺。其無論是與牛仔褲，運動褲，還是休閒褲搭配，都能輕鬆展現出你的獨特風格。我們採用的是輕質面料，這讓它不僅看起來舒適，實際穿著起來也同樣如此。我們堅信，無論是在炎熱的夏季或是溫暖的春秋，它都會是你衣櫃永不缺席的經典。',
    img_urls: [
      'https://i.imgur.com/3POPsec.jpg',
      'https://i.imgur.com/FCGmUvw.jpg',
      'https://i.imgur.com/Oqv99I5.jpg',
    ],
    recycled: false,
  },
  {
    name: '西部牛仔抽鬚外套',
    gender: GENDER_CLASSES.female,
    category: PRODUCT_CATEGORY_CLASSES.top,
    features: ['100%棉', '寬鬆', '米色'],
    description:
      '我們以抽鬚手法為這款牛仔外套添加了細緻的紋理和復古感，再現了美國西部拓荒時期的粗獷和豪放，並透過我們精心剪裁的版型及選色，營造出簡潔而不失高雅的反差感。受夠了街上那些沒辨識感的衣服了嗎？相信這款不會讓妳失望！',
    img_urls: [
      'https://i.imgur.com/7WQPhz8.jpg',
      'https://i.imgur.com/lnJqUsa.jpg',
      'https://i.imgur.com/PyvSUkc.jpg',
    ],
    recycled: false,
  },
  {
    name: '軍裝外套',
    gender: GENDER_CLASSES.female,
    category: PRODUCT_CATEGORY_CLASSES.top,
    features: ['100%棉', '直筒', '淺藍'],
    description:
      '隨著時代的推進，有些經典永遠不會退潮。而軍裝，就是這永不退潮的經典之一。我們設計的軍裝，以 M65 作為開發基底，在原先經典的版型中加寬身體部位的尺寸，讓原本一絲不苟的軍裝，多了點從容不迫的氣息。原先以拉鍊及排扣為主的剪裁，更改成綁繩元素，除了添增視覺層次之外，更多的是體現對於品味的不妥協。誰說女孩一定得甜美？帥氣也是妳能駕馭的了的風格！',
    img_urls: [
      'https://i.imgur.com/jm3ckA3.jpg',
      'https://i.imgur.com/NPAVwk9.jpg',
      'https://i.imgur.com/6ZQ3UaY.jpg',
    ],
    recycled: false,
  },
  {
    name: '骷髏短T (女)',
    gender: GENDER_CLASSES.female,
    category: PRODUCT_CATEGORY_CLASSES.top,
    features: ['100%棉', '短T', '黑色'],
    description:
      '循規蹈矩的面對現在的生活，但內心的自我卻又厭煩這個世界的條條框框？這款低調純黑基底的短 T，搭配代表叛逆的骷髏，及帶有反差感的 YA 手勢，彷彿向著世界作出個輕蔑的嘲諷，並呈現出堅強的自我！即便世界不是那麼友善，但我依舊能開朗面對。這件上衣適不適合妳的外在我不知道，但我相信絕對能夠滿足妳這入世但又叛逆的靈魂！',
    img_urls: [
      'https://i.imgur.com/Zbom9NV.jpg',
      'https://i.imgur.com/in3PWTv.jpg',
      'https://i.imgur.com/ZnmgPeg.jpg',
    ],
    recycled: false,
  },
  {
    name: '橫紋短版喇叭袖上衣',
    gender: GENDER_CLASSES.female,
    category: PRODUCT_CATEGORY_CLASSES.top,
    features: ['100%棉', '長袖短版', '灰黑'],
    description:
      '不知道妳有沒有這種經驗，每次買衣服的時候，常常會根據過往的習慣，又或是思考家中目前所擁有的衣服來想像搭配，但不管怎麼思考，最後我們往往還是會選擇那最保守，最經典的款式。有時候真的不是自己不勇敢，而是世界的條條框框淺移默化的讓我們變的不敢嘗試。這些我們都懂，所以我們希望能透過這款上衣來幫妳跨越那一步！經典的條紋設計，讓妳可以不用煩惱如何與現有的衣物搭配；同時版型更改為短版，以及加上開口幅度不那麼大的喇叭袖，在不偏離自身接受度的情況下，多加一些小心機，現在以這件衣服開始，踏上妳的改變之路！',
    img_urls: [
      'https://i.imgur.com/hGL970s.jpg',
      'https://i.imgur.com/Gey3KYP.jpg',
      'https://i.imgur.com/9lbgRnu.jpg',
    ],
    recycled: false,
  },
  {
    name: '大格紋寬鬆襯衫',
    gender: GENDER_CLASSES.female,
    category: PRODUCT_CATEGORY_CLASSES.top,
    features: ['100%棉', '寬鬆', '紅'],
    description:
      '這款襯衫是以紅色為主，並配上白色和灰色的大格紋，極具視覺吸引力。略為 oversize 的設計既休閒又隨興。整體慵懶的氛圍，休閒的鄉村風格，讓妳即便身處都市叢林，也能透過這件襯衫帶給妳的穿搭體驗，而感受到那寧靜又舒適的呼喚。\n\n',
    img_urls: [
      'https://i.imgur.com/eE0fGwp.jpg',
      'https://i.imgur.com/vX161tw.jpg',
      'https://i.imgur.com/Vxgneip.jpg',
    ],
    recycled: false,
  },
  {
    name: '馬卡龍色排釦大衣',
    gender: GENDER_CLASSES.female,
    category: PRODUCT_CATEGORY_CLASSES.top,
    features: ['100%棉', '合身', '淺粉'],
    description:
      '這款大衣的顏色是一種淡雅的馬卡龍粉，給人一種甜美而溫柔的感覺。其版型設計靈感來自於英倫風格，使得大衣在簡約中蘊含著一種優雅與精致。這款大衣的設計中特別使用了排釦元素，為其增添了一種時尚而又不失個性的氣息。無論是在冷冽的冬季或是寒風乍起的春秋，這款大衣都能為您提供足夠的保暖，同時也能讓您在人群中脫穎而出。',
    img_urls: [
      'https://i.imgur.com/9B9TzQc.jpg',
      'https://i.imgur.com/n0i7mCz.jpg',
      'https://i.imgur.com/BXkdvrO.jpg',
    ],
    recycled: false,
  },
  {
    name: '短版長袖 T-Shirt',
    gender: GENDER_CLASSES.female,
    category: PRODUCT_CATEGORY_CLASSES.top,
    features: ['100%棉', '短版', '黑色'],
    description:
      '這款看似簡單的短版 T-Shirt 能帶給妳什麼樣的驚喜？有別於一般的同性質產品，此款於袖口及衣擺部分都做了縮口設計，不但方便調整，更是多出了與眾不同的層次感；我們精心設計的版型，初衷就是讓衣服能夠在不多添加額外要素的情況下，還能給人風格獨特的視覺感受。誰說風格一定要透過複雜結構或圖案來體現？這款簡單又不簡單的單品，絕對能滿足品味獨特又時尚的妳！',
    img_urls: [
      'https://i.imgur.com/SSRZTqU.jpg',
      'https://i.imgur.com/5fEmOCr.jpg',
      'https://i.imgur.com/VRqlYXJ.jpg',
    ],
    recycled: false,
  },
  {
    name: '英倫風排釦西裝外套',
    gender: GENDER_CLASSES.female,
    category: PRODUCT_CATEGORY_CLASSES.top,
    features: ['100%棉', '修身', '灰色'],
    description:
      '獨家修身剪裁，派尼灰搭配細格紋，深淺的線條交錯構成優雅格紋；我們不喜歡快時尚，經典的樣式，歷史長河流動時所沉澱的底蘊，才是我們想要將之附著在身上之物。而這款新推出的外套，就是我們想要妳擁有的經典英倫風衣著。',
    img_urls: [
      'https://i.imgur.com/2ylACiM.jpg',
      'https://i.imgur.com/0F2VVv5.jpg',
      'https://i.imgur.com/lu0A6zA.jpg',
    ],
    recycled: false,
  },
  {
    name: '圓點印花一字領上衣',
    gender: GENDER_CLASSES.female,
    category: PRODUCT_CATEGORY_CLASSES.top,
    features: ['100%棉', '短袖', '黑色'],
    description:
      '加寬的一字領，襯托出您美麗的頸肩線條。經典印花元素，為您的穿搭添增了活潑氛圍。高雅黑色基底，無論搭配其他淺色或深色系的單品，都能完美結合。這款結合性感、優雅、及俏皮的完美衣著，等待您來感受，',
    img_urls: [
      'https://i.imgur.com/NoaLtoq.jpg',
      'https://i.imgur.com/yVvQIAR.jpg',
      'https://i.imgur.com/4ijE3pE.jpg',
    ],
    recycled: false,
  },
  {
    name: '60s 復古英倫翻袖大衣',
    gender: GENDER_CLASSES.female,
    category: PRODUCT_CATEGORY_CLASSES.top,
    features: ['100%棉', '大衣', '棕灰'],
    description:
      '60年代至今，英國格紋風格衣著一直是不退流行，並隨著時代變動著的元素之一。這款翻袖大衣是我們對那個偉大年代的致敬。獨特的棕灰色系打底，懷舊的格紋設計，搭配上現代感的剪裁，給人一種衝突但又完美融合的映象。排釦元素以及翻袖設計，更是讓復古元素完美融合進這件衣著當中。時尚不是只有一種標準，但經典卻是永存於世的標竿，相信這件大衣，絕對能擊中妳那不妥協的品味。',
    img_urls: [
      'https://i.imgur.com/VfHEkt8.jpg',
      'https://i.imgur.com/I0Gr6kQ.jpg',
      'https://i.imgur.com/bItGvKt.jpg',
    ],
    recycled: false,
  },
  {
    name: 'Bohemian 碎花連身洋裝',
    gender: GENDER_CLASSES.female,
    category: PRODUCT_CATEGORY_CLASSES.top,
    features: ['100%棉', '寬鬆', '白色'],
    description:
      '我們認為，一個人的衣著不單單只是為了追求外界欣賞，更多的是自己對自己的一種認同，這也是我們一直以來的理念，透過一件衣服，得到妳想要獲得的那個自己。而這款美麗優雅的洋裝，就是為了這個目的而生。潔白基底滿佈碎花圖案，清新自然的風格，展現出迷人的波希米亞風情。在忙碌的現代社會，穿上這件衣服，暫時隔離喧囂，讓精神朝向那令人嚮往，無拘無束又自由浪漫的遙遠之地。',
    img_urls: [
      'https://i.imgur.com/aWohbdR.jpg',
      'https://i.imgur.com/ca2A75n.jpg',
      'https://i.imgur.com/sXqQEX1.jpg',
    ],
    recycled: false,
  },
];
