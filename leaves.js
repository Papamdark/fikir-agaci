/* ============================================================================
   FİKİR AĞACI — YAPRAK KAYDI
   Yeni yaprak eklemek için: bu diziye yeni bir kayıt ekle (en sona, sıra bozulmasın;
   yorumlar yaprakları sıra numarasıyla etiketler) ve assets/glass/ içine cam heykel
   görselini (1024x1024, düz koyu arka plan) koy. Ağaç kendiliğinden büyür.

   Alanlar:
     id        : bağlantı kimliği (papamdark.github.io/#yaprak-<id>)
     img       : cam heykel görseli
     glassTr/En: heykelin adı
     dateIso   : ağaçtaki büyüme sırası için kayıt tarihi
     tint      : sahnenin hâlesi için [r,g,b]
     size      : afiş ölçeği (lg / md / sm); dil özelinde tr.size / en.size ile ezilebilir
     steps     : Köken & Sorgulama kaydı (k: başlık, q: Celil'in sorusu, b: metin,
                 orig: birincil kaynak, linkUrl/linkLabel: dış bağlantı)
   ============================================================================ */
window.FA_LEAVES = [
  {
    id: "1",
    img: "assets/glass/01-gul.jpg",
    glassTr: "Cam Gül", glassEn: "Glass Rose",
    dateIso: "2026-09-06T21:12",
    dateTr: "6 Eylül 2026 · 21:12", dateEn: "September 6, 2026 · 21:12",
    pillTr: "Köken & Sorgulama · Instagram → Gülistan",
    pillEn: "Provenance & Inquiry · Instagram → Gulistan",
    tint: [168, 84, 255],
    size: "lg",
    tr: {
      p: ["Yanlış üslup,", "doğru sözün", "celladıdır."],
      src: "Sadi Şirazî Atfı — Gülistan, VIII. Bab (Hikmet 80)",
      steps: [
        { k: "01 · NEREDE BULUNDU & NASIL SORGULANDI?",
          q: "“Instagram’da bir gönderinin altında yorum olarak gördüm, çok hoşuma gitti ve ben de orijinini aramaya karar verdim.”" },
        { k: "02 · KÖKEN KAZISI & BİRİNCİL KAYNAK",
          b: "Söz internette <em>Sadi Şirazî</em>’ye atfedilse de birincil Farsça yazmalarda birebir bu cümleyle geçmiyor; modern Türkçede kristalleşmiş bir vecize. Ancak kökenini kazıdığımda, Sadi’nin 1258 tarihli <em>Gülistan</em> eserinin 8. Babında (<em>Âdâb-ı Sohbet</em>, Hikmet 80) bu düşüncenin gerçek atasını buldum:",
          orig: "حکایت بر مزاج مستمع گوی / اگر خواهی که دارد با تو میلی — «Sözünü dinleyenin mizacına göre söyle; onun sana kulak vermesini istiyorsan.»" },
        { k: "03 · KÖK KAYDI",
          b: "Doğrunun doğruluğu üsluba bağlı değildir; fakat insana ulaşabilmesi çoğu zaman üsluba bağlıdır. Söyleyen doğrunun üslubundan, dinleyen de doğrunun özünü üsluptan ayırabilmekten sorumludur." }
      ]
    },
    en: {
      p: ["Wrong delivery is", "the executioner of", "a true word."],
      src: "Attributed to Saadi Shirazi — Gulistan, Ch. VIII (Maxim 80)",
      steps: [
        { k: "01 · HOW IT WAS FOUND & QUESTIONED",
          q: "“I saw it as a comment under an Instagram post, loved it, and decided to search for its origin.”" },
        { k: "02 · SOURCE EXCAVATION & PRIMARY TEXT",
          b: "Although widely attributed online to <em>Saadi Shirazi</em>, the exact sentence is a modern aphorism rather than a verbatim quote. When I dug into its roots, I found its direct intellectual ancestor in Chapter VIII (<em>On the Rules of Conduct</em>, Maxim 80) of Saadi’s 13th-century <em>Gulistan</em>:",
          orig: "حکایت بر مزاج مستمع گوی / اگر خواهی که دارد با تو میلی — “Temper your speech to the temperament of the listener, if you wish them to incline toward you.”" },
        { k: "03 · ROOT RECORD",
          b: "The truth of a statement does not depend on its delivery; yet its ability to reach another mind almost always does. The speaker answers for the grace of the vessel, the listener for separating the essence from the tone." }
      ]
    }
  },
  {
    id: "2",
    img: "assets/glass/02-kelebek.jpg",
    glassTr: "Cam Kelebek", glassEn: "Glass Butterfly",
    dateIso: "2026-10-04T01:24",
    dateTr: "3–4 Ekim 2026 · 01:24", dateEn: "October 3–4, 2026 · 01:24",
    pillTr: "Köken & Sorgulama · Portekizce Vecize",
    pillEn: "Provenance & Inquiry · Portuguese Aphorism",
    tint: [120, 110, 255],
    size: "sm",
    tr: {
      p: ["Güzel bir bahçen olsun; kelebekler gelir.", "Kelebekler gelmese bile,", "güzel bir bahçen olmuş olur."],
      src: "Mário Quintana Atfı — Portekizce Vecize",
      steps: [
        { k: "01 · NEREDE BULUNDU & NASIL SORGULANDI?",
          q: "“Sosyal medyada karşılaştığım bu alıntıyı çok sevdim; orijinalinin Portekizce olduğunu öğrenince kökünü araştırıp kendi cümlemle kaydetmeye karar verdim.”" },
        { k: "02 · KÖKEN KAZISI & DİL İZİ",
          b: "İlk olarak sosyal medyada <em>‘Zamanını kelebekleri kovalamakla geçirirsen onlar senden kaçar...’</em> haliyle karşılaştım. Kökenini araştırdığımda, Brezilya Portekizcesinde şair <em>Mário Quintana</em>’ya (çoğu kez <em>O Segredo</em> şiiriyle harmanlanarak) atfedilen çağdaş bir özdeyiş olduğunu gördüm:",
          orig: "«Cuide do seu jardim que as borboletas vêm até você; e se elas não vierem, você ainda terá um belo jardim.»" },
        { k: "03 · KÖK KAYDI",
          b: "Dışsal bir sonuca, alkışa veya karşılığa bağımlı kalmadan; insanın kendi yaşam alanını ve iç dünyasını inşa etmesi başlı başına tamamlanmış bir kazançtır." }
      ]
    },
    en: {
      p: ["Cultivate a beautiful garden; the butterflies will come.", "And even if they don't,", "you will still have a beautiful garden."],
      src: "Attributed to Mário Quintana — Portuguese Aphorism",
      steps: [
        { k: "01 · HOW IT WAS FOUND & QUESTIONED",
          q: "“I came across this quote on social media and loved it; once I learned the original was Portuguese, I decided to trace its origin and record it in my own words.”" },
        { k: "02 · SOURCE EXCAVATION & LINGUISTIC TRACE",
          b: "I first ran into its longer variant on social media (<em>‘If you spend your time chasing butterflies, they fly away...’</em>). When I traced its origin, I found it to be a contemporary Brazilian Portuguese aphorism widely attributed to poet <em>Mário Quintana</em>:",
          orig: "«Cuide do seu jardim que as borboletas vêm até você; e se elas não vierem, você ainda terá um belo jardim.»" },
        { k: "03 · ROOT RECORD",
          b: "Building one's own living space and inner world is a complete reward in itself, independent of external applause, outcomes, or reciprocation." }
      ]
    }
  },
  {
    id: "3",
    img: "assets/glass/03-dalga.jpg",
    glassTr: "Cam Dalga", glassEn: "Glass Wave",
    dateIso: "2026-09-06T20:53",
    dateTr: "6 Eylül 2026 · 20:53", dateEn: "September 6, 2026 · 20:53",
    pillTr: "Köken & Sorgulama · Kaizen → Mizen Boushi → Laozi",
    pillEn: "Provenance & Inquiry · Kaizen → Mizen Boushi → Laozi",
    tint: [96, 120, 255],
    size: "lg",
    tr: {
      p: ["Bir sorunu,", "daha oluşmadan", "çözmek."],
      src: "Mizen Boushi (未然防止) · Huangdi Neijing (治未病) · Dao De Jing 64",
      steps: [
        { k: "01 · NEREDE BULUNDU & NASIL YAŞANDI?",
          q: "“Kaizen felsefesini yıllardır duyuyordum, kendi hayatımda da uyguluyordum; mesela motosiklet kullanırken hep kafamda rota oluştururum, gideceğim yere en hızlı şekilde değil en güvenli ve risksiz şekilde nasıl ulaşacağımı hesaplardım. O yüzden sürekli ara sokaklara vs. girer yolumu uzatırdım; maksat kaza olmadan kazayı önlemekti, çünkü mantığıma göre ne kadar fazla aksiyon varsa trafikte risk o kadar fazla artıyor.”" },
        { k: "02 · KÖKEN KAZISI (MÜHENDİSLİKTEN ANTİK FELSEFEYE)",
          b: "İlk katmanda sözün <em>Kaizen</em> (sürekli iyileştirme) değil, Toyota mühendisi Tatsuhiko Yoshimura’nın (2002) sistemleştirdiği <em>Mizen Boushi</em> (未然防止 — sorunu meydana gelmeden önlemek) olduğunu gördüm. Endüstriyel katmanı kaldırıp felsefi köke indiğimde ise MÖ 2–4. yüzyıl <em>Huangdi Neijing</em> ve <em>Laozi — Dao De Jing (64. Bab)</em> metinlerine ulaştım:",
          orig: "聖人不治已病，治未病 (Huangdi Neijing: «Bilge, oluşmuş hastalığı değil, henüz oluşmamış hastalığı tedavi eder; hastalık çıktıktan sonra ilaç vermek susadıktan sonra kuyu kazmaya benzer.») · 為之於未有，治之於未亂 (Laozi 64: «Henüz var olmadan ilgilen; henüz karışıklık çıkmadan düzenle.»)" },
        { k: "03 · KÖK KAYDI",
          b: "Henüz olmayanı görebilmek — Laozi’nin ‘未有 / henüz var olmayan’ düşüncesiyle akraba. Problem ortaya çıktığında yalnız sonucu görüyoruz; bilgelik, sonucun doğduğu küçük başlangıcı fark etmek olabilir." }
      ]
    },
    en: {
      p: ["Deal with", "a problem before", "it arises."],
      src: "Mizen Boushi (未然防止) · Huangdi Neijing (治未病) · Dao De Jing 64",
      steps: [
        { k: "01 · HOW IT WAS FOUND & LIVED",
          q: "“I’d been hearing about Kaizen philosophy for years and was already practicing it in my own life—for instance, whenever I rode a motorcycle I always mapped out a route in my head, calculating not how to get somewhere the fastest, but how to get there in the safest, most risk-free way. So I’d constantly duck into side streets and take the longer way around; the whole point was to prevent the crash before a crash could even happen, because to my mind, the more action there is in traffic, the more the risk climbs.”" },
        { k: "02 · SOURCE EXCAVATION (FROM ENGINEERING TO ANCIENT PHILOSOPHY)",
          b: "At the first layer, I found that the principle is not <em>Kaizen</em> (continuous improvement) but Toyota engineer Tatsuhiko Yoshimura’s 2002 discipline <em>Mizen Boushi</em> (未然防止 — preventing a defect before it occurs). Stripping away the industrial layer led me to its ancient philosophical core in the <em>Huangdi Neijing</em> and <em>Laozi’s Dao De Jing (Ch. 64)</em>:",
          orig: "聖人不治已病，治未病 (Huangdi Neijing: “The sage treats not the illness that has already formed, but the illness not yet formed [治未病]; giving medicine after illness strikes is like digging a well after becoming thirsty.”) · 為之於未有，治之於未亂 (Laozi 64: “Act upon it before it exists; govern it before disorder arises.”)" },
        { k: "03 · ROOT RECORD",
          b: "Seeing what is not yet there—kin to Laozi’s ‘未有 / the not-yet-existent.’ When a problem erupts we only see the outcome; wisdom lies in noticing the quiet threshold where the outcome begins." }
      ]
    }
  },
  {
    id: "4",
    img: "assets/glass/04-cicek.jpg",
    glassTr: "Cam Çiçek", glassEn: "Glass Flower",
    dateIso: "2026-10-13T12:00",
    dateTr: "13 Ekim 2026", dateEn: "October 13, 2026",
    pillTr: "Köken & Sorgulama · Adventure Time (S3B25)",
    pillEn: "Provenance & Inquiry · Adventure Time (S3E25)",
    tint: [214, 92, 255],
    size: "md",
    tr: {
      p: ["You're a beautiful flower", "and I love to", "watch you grow."],
      src: "Adventure Time — Joshua’nın Jake’e Sözü (3. Sezon, 25. Bölüm)",
      steps: [
        { k: "01 · NEREDE BULUNDU & NASIL KAYDA GEÇTİ?",
          q: "“Böyle güzel cümleler duymayı çok seviyorum; şu an kullanacak bir ortam ve lüzum yok lakin yeri ve zamanı geldiğinde kullanmaya can atıyorum.”" },
        { k: "02 · SAHNE BAĞLAMI & BİRİNCİL KAYNAK",
          b: "<em>Adventure Time</em> 3. Sezon 25. Bölüm (<em>Dad’s Dungeon</em>): Finn ve Jake’in babaları Joshua’nın zindan boyunca onları sert sınavlardan geçirdikten sonra, son hologram mesajında beklenmedik bir şefkatle bıraktığı kapanış cümlesi.",
          orig: "«You're a beautiful flower, and I love to watch you grow.» — Joshua (Dad's Dungeon)" },
        { k: "03 · KÖK KAYDI",
          b: "Dili değiştirilmeden, duyduğum ilk andaki çarpıcılığıyla Fikir Ağacı’ma olduğu gibi bıraktığım cümle." }
      ]
    },
    en: {
      p: ["You're a beautiful flower", "and I love to", "watch you grow."],
      src: "Adventure Time — Joshua to Jake (Season 3, Episode 25)",
      steps: [
        { k: "01 · HOW IT WAS FOUND & RECORDED",
          q: "“I love hearing beautiful sentences like this; right now there’s no setting or occasion for it, yet I can’t wait to use it when the right place and time come.”" },
        { k: "02 · SCENE CONTEXT & PRIMARY SOURCE",
          b: "From <em>Adventure Time</em> Season 3, Episode 25 (<em>Dad’s Dungeon</em>): after putting Finn and Jake through grueling trials across the dungeon, their father Joshua ends his final holographic message with this sudden, disarming tenderness.",
          orig: "«You're a beautiful flower, and I love to watch you grow.» — Joshua (Dad's Dungeon)" },
        { k: "03 · ROOT RECORD",
          b: "Kept untranslated in the exact English phrasing in which it first struck me." }
      ]
    }
  },
  {
    id: "5",
    img: "assets/glass/05-pusula.jpg",
    glassTr: "Cam Pusula", glassEn: "Glass Compass",
    dateIso: "2026-09-10T08:45",
    dateTr: "10 Eylül 2026 · 08:45", dateEn: "September 10, 2026 · 08:45",
    pillTr: "Köken & Sorgulama · Rota YouTube (10:42)",
    pillEn: "Provenance & Inquiry · Rota YouTube (10:42)",
    tint: [136, 104, 255],
    size: "sm",
    tr: {
      p: ["Artık hepimizin her şeye erişimi", "bir an, bir fikir, bir dakikalık", "zihniyet değişimi kadar uzakta."],
      src: "Rota — YouTube (10:42)",
      steps: [
        { k: "01 · NEREDE BULUNDU & NASIL KAYDA GEÇTİ?",
          q: "“Rota’nın videosunu izlerken 10:42’de söylediği bu düşünce beni çok etkiledi.”" },
        { k: "02 · BİRİNCİL KAYNAK & ZAMAN DAMGASI",
          b: "Videoyu izlerken tam <em>10:42</em> saniyesinde durdurup doğrudan konuşma akışından çıkardım ve saniyesiyle buraya kaydettim.",
          linkUrl: "https://www.youtube.com/watch?v=0htz6KZUBLg&t=642s",
          linkLabel: "YouTube Kaynağını Aç (10:42) ↗" },
        { k: "03 · KÖK KAYDI",
          b: "İmkânın fiziksel uzaklığı ile zihinsel uzaklık aynı şey değildir. Dış dünyada hiçbir şey değişmediği hâlde, tek bir fikir ve algı eşiğiyle insanın erişilebilir gördüğü hayatların kümesi değişir." }
      ]
    },
    en: {
      p: ["Today, our access to everything is", "one moment, one idea, one minute", "of mindset shift away."],
      src: "Rota — YouTube (10:42)",
      steps: [
        { k: "01 · HOW IT WAS FOUND & RECORDED",
          q: "“While watching Rota’s video, what he said at the 10:42 mark really hit me.”" },
        { k: "02 · PRIMARY SOURCE & EXACT TIMESTAMP",
          b: "I paused the video at the exact <em>10:42</em> mark, pulled the sentence directly from the spoken flow, and saved it with its timestamp.",
          linkUrl: "https://www.youtube.com/watch?v=0htz6KZUBLg&t=642s",
          linkLabel: "Open YouTube Source (10:42) ↗" },
        { k: "03 · ROOT RECORD",
          b: "Physical distance to a possibility is not the same as mental distance. Even when nothing in the outer world changes, a single shift in perception changes the set of lives you recognize as reachable." }
      ]
    }
  },
  {
    id: "6",
    img: "assets/glass/06-tulum.jpg",
    glassTr: "Cam Tulum", glassEn: "Glass Waterskin",
    dateIso: "2026-10-21T12:00",
    dateTr: "21 Ekim 2026", dateEn: "October 21, 2026",
    pillTr: "Köken & Sorgulama · Görsel Paylaşım → İbn Kuteybe",
    pillEn: "Provenance & Inquiry · Shared Image → Ibn Qutayba",
    tint: [176, 96, 240],
    size: "sm",
    tr: {
      p: ["Bir şey kesinleşmeden önce", "ilan etmek,", "o şeyin zayıflamasına neden olur."],
      src: "İbn Kuteybe ed-Dîneverî — ‘Uyûnü’l-Ahbâr, Kitâbü’s-Sultân",
      steps: [
        { k: "01 · NEREDE BULUNDU & NASIL SORGULANDI?",
          q: "“‘İyi Bir Dua’ etiketli bir görsel paylaşımda gördüm; sözün ağırlığı hoşuma gidince Arapça aslını ve nereden geldiğini araştırdım.”" },
        { k: "02 · KÖKEN KAZISI & BİRİNCİL KAYNAK",
          b: "Arapça aslının, 9. yüzyıl bilgini <em>İbn Kuteybe ed-Dîneverî</em>’nin (ö. 889) <em>‘Uyûnü’l-Ahbâr</em> eserinde, <em>Kitâbü’s-Sultân</em> içindeki sır ve sırrı saklama babında “derlerdi ki” kaydıyla aktarılan klasik bir Arap strateji hikmeti olduğunu buldum. Bazı derlemelerde (ör. Râgıb el-İsfahânî, <em>ez-Zerîa</em>) aynı söz <em>vehy</em> yerine <em>vehn</em> (zayıflık) kelimesiyle geçiyor:",
          orig: "وكان يقال: مِنْ وَهْيِ الأمرِ إعلانُهُ قبلَ إحكامِه — «Bir işin gevşemesi, sağlamlaştırılmadan önce ilan edilmesindendir.»" },
        { k: "03 · KELİME İZİ",
          b: "<em>Vehy</em>: su tulumunun dikişlerinin gevşeyip içindekini sızdırması. <em>İhkâm</em>: bir şeyi sağlamlaştırmak, dikişlerini sıkılaştırmak. Sözün arkasındaki imge, dikişleri henüz sağlamlanmamış bir su tulumudur." }
      ]
    },
    en: {
      size: "md",
      p: ["Announcing a thing before", "it is secured", "is what weakens it."],
      src: "Ibn Qutayba al-Dinawari — ʿUyūn al-Akhbār, Book of Sovereignty",
      steps: [
        { k: "01 · HOW IT WAS FOUND & QUESTIONED",
          q: "“I saw it in a shared image captioned ‘A Good Prayer’; drawn to its weight, I looked into its Arabic original and where it came from.”" },
        { k: "02 · SOURCE EXCAVATION & PRIMARY TEXT",
          b: "I traced the Arabic original to a classical maxim of statecraft preserved by the 9th-century scholar <em>Ibn Qutayba al-Dinawari</em> (d. 889) in his <em>ʿUyūn al-Akhbār</em>, within the <em>Book of Sovereignty</em>’s chapter on secrets and keeping them, introduced with “it used to be said.” Some later compilations (e.g. al-Raghib al-Isfahani’s <em>al-Dharīʿa</em>) read <em>wahn</em> (weakness) instead of <em>wahy</em>:",
          orig: "وكان يقال: مِنْ وَهْيِ الأمرِ إعلانُهُ قبلَ إحكامِه — “The unravelling of an affair lies in announcing it before it is secured.”" },
        { k: "03 · WORD TRACE",
          b: "<em>Wahy</em>: the loosening of a waterskin’s seams until it leaks. <em>Iḥkām</em>: to make firm, to tighten the stitching. The image behind the saying is a waterskin whose seams have not yet been secured." }
      ]
    }
  }
];

window.FA_MANIFESTO = {
  en: ["<em>The Idea Tree</em> is something a little more than an autobiography.",
       "I wanted to gather everything that makes me who I am, everything I don't want to forget and want to be remembered by, in one place anyone can see: from my Obsidian notes to book quotes, down to the one thing in a film that got to me while I was watching it. It's all here.",
       "The urge came alive when my <em>need for mirroring</em>, the part of me that looks for a witness, met my <em>observing ego</em>, the part that keeps a record of me."],
  tr: ["<em>Fikir Ağacı</em> aslında otobiyografiden hallice bir şey.",
       "Beni ben yapan, unutmak istemediğim ve anılmak istediğim her şeyi herkesin görebileceği bir yerde toplamak istedim: Obsidian notlarımdan kitap alıntılarına, bir film izlerken beni etkileyen o tek şeye kadar her şey burada.",
       "Bu dürtü, bir tanık arayan <em>aynalanma ihtiyacım</em> ile kendimi kayda geçiren <em>gözlemleyen egom</em> buluşunca harekete geçti."]
};

window.FA_WRITINGS = [
  {
    id: "zirh-ve-kimlik",
    date: "21 AĞUSTOS 2026",
    flair: "Sadece içimi döküyorum",
    trackKey: "beach",
    titleHtml: `Kendini yüceltmek hayatta kalmanı sağlayabilir <em>ama sonrasında hayatını mahvedebilir.</em>`,
    preview: `Dışarıdan sürekli “Sen değersizsin.” mesajı geliyorsa, içerideki ses de buna karşı “Hayır, ben değerliyim.” diye daha yüksek sesle konuşmaya başlıyor...`,
    media: "assets/writings/eredin-mask.webp",
    ambient: "assets/writings/eredin-face.webp",
    bgDeep: "#14060c",
    accent: "#ff9d66",
    border: "rgba(255, 138, 76, 0.46)",
    glow: "rgba(255, 110, 48, 0.55)",
    soft: "rgba(255, 114, 53, 0.24)",
    particleMode: "embers",
    bodyHtml: `
      <p>İnsan egosunun aldığı her darbeyi kötü bir şey olarak görmüyorum. Hatta bazen tam tersine, egonun kendisini savunmaya almasının gerekli olduğunu düşünüyorum. Sürekli küçümsendiğinizi, dışlandığınızı veya değersiz hissettirildiğinizi düşünün. Bir süre sonra zihniniz buna karşı doğal olarak bir savunma geliştirmeye başlıyor.</p>

      <div class="art-quote">Dışarıdan sürekli <strong>“Sen değersizsin.”</strong> mesajı geliyorsa, içerideki ses de buna karşı <strong>“Hayır, ben değerliyim.”</strong> diye daha yüksek sesle konuşmaya başlıyor.</div>

      <p>Normal şartlarda belki hiç ihtiyaç duymayacağınız kadar kendinizi övmeye, başarılarınızı öne çıkarmaya, diğer insanların sizin hakkınızdaki düşüncelerini küçümsemeye başlayabiliyorsunuz. İlk bakışta kibir gibi görünen bazı davranışların altında aslında yaralanmış bir benliği koruma çabası bulunabiliyor. Psikolojide bunu <strong>özsaygının korunması (self-esteem maintenance)</strong>, <strong>telafi (compensation)</strong> ve bunun daha ileri bir biçimi olan <strong>aşırı telafi (overcompensation)</strong> gibi kavramlarla açıklamak mümkün. Yani zihnin yaptığı şey tamamen anlamsız değil. Benlik algısına sürekli saldırı geliyorsa sistem bir çeşit karşı ağırlık oluşturuyor.</p>

      <p>Amma velakin bu tehdit artık varolmadığın da varlığını korumaya devam ettiğin de bizim aleyhimize bir durum olmaya başlıyor çünkü sizi bir dönem ayakta tutan <strong>“Kimseye ihtiyacım yok, kimsenin ne düşündüğü umurumda değil, ben zaten yeterince iyiyim.”</strong> düşünceleri zamanla savunma olmaktan çıkıp kimliğinizin bir parçasına dönüşebiliyor. Başlangıçta sizi başkalarının saldırılarından koruyan şey, bu sefer insanların size yaklaşmasını engellemeye başlıyor.</p>

      <p>Bunu çok iyi anlatan ve bana da ilham olan yıllar önce izlediğim <a href="https://www.youtube.com/watch?v=n3Xv_g3g-mA" target="_blank" rel="noopener" class="inline-link">çok güzel bir video var</a>, merak etmeyin uzun ve kompleks değil, sıkılmadan tüketebilirsiniz.</p>

      <p>Bu konudan çok yere bağlantı oluşturabilirim, başka sublarda insanları stalkladığım da, aşırı narsistden tut, aşırı self-devaluation yapana kadar örnekler mevcut, bir işe yarayacağını düşündüğüm de belki o noktaya da BARMAK basarız.</p>
    `
  },
  {
    id: "bekleme-odasi",
    date: "11 AĞUSTOS 2026",
    flair: "Yalnızlık Hakkında",
    trackKey: "olumedogru",
    titleHtml: `Yalnızlığı bir <em>bekleme odası</em> gibi yaşamak.`,
    preview: `“Belki de yalnızlığı bekleme odası gibi algılıyorsun: Birileri hayatıma girince asıl hayat başlayacak.” Eğer yalnızken hayatımı kurmayı ertelersem...`,
    media: "assets/writings/nighthawks.png",
    ambient: "assets/writings/nighthawks.png",
    bgDeep: "#061014",
    accent: "#f3cf7a",
    border: "rgba(243, 207, 122, 0.44)",
    glow: "rgba(234, 179, 8, 0.46)",
    soft: "rgba(243, 207, 122, 0.20)",
    particleMode: "nighthawks",
    bodyHtml: `
      <p>Geçenlerde yalnızlık üzerine düşünürken aklıma şöyle bir cümle geldi:</p>
      <div class="art-quote"><strong>“Belki de yalnızlığı bekleme odası gibi algılıyorsun: Birileri hayatıma girince asıl hayat başlayacak.”</strong></div>
      <p>Bu cümle benim kafamda bir şeyleri yerine oturttu. Çünkü yalnızlığın kendisinden ne kadar rahatsız olduğumdan artık emin değilim. Daha çok yalnızken hayatımı askıya alıyor gibiyim. Ders çalışacağım, bir şeyler öğreneceğim, yazacağım, dışarı çıkacağım, kendim için bir şey yapacağım ama sanki bunların hepsinden önce birinin gelmesi gerekiyor.</p>
      <p>Bazen tek başımayken saatlerce hiçbir şey yapmadan birileriyle konuşma ihtiyacı hissediyorum. İlginç olan şu ki biriyle konuştuğumda da o kişiye sürekli ihtiyacım olmuyor. Biraz sohbet etmek, birinin orada olduğunu bilmek yetiyor ve sonra gayet rahat kendi yaptığım şeye dönebiliyorum.</p>
      <p>Ama burada garip bir paradoks var. Eğer yalnızken hayatımı kurmayı ertelersem, birilerinin dahil olmak isteyeceği bir hayatı da kuramıyorum. Başka insanlar bu hayatı başlatan kişiler değil de zaten devam eden bir hayata sonradan dahil olan kişiler olabilir. Belki mesele yalnızlığı sevmeyi öğrenmek bile değildir; sadece <strong>yalnızken de hayatın devam ettiğini kabullenmek</strong> olabilir.</p>
    `
  }
];
