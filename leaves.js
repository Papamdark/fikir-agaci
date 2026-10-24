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
          q: "“‘Yanlış üslup doğru sözün katilidir’ diye bir yorum gördüm Instagram’da, bayıldım; bunun kökenlerini ve nerede geçtiğini merak ettim, derin bir araştırma yapmanı istiyorum.”" },
        { k: "02 · KÖKEN KAZISI & BİRİNCİL KAYNAK",
          b: "Söz internette ve çeşitli kaynaklarda <em>Sadi Şirazî</em>’ye atfedilse de birincil Farsça yazmalarda birebir bu cümleyle geçmez; modern Türkçede kristalleşmiş bir vecizedir. Ancak Sadi’nin 1258 tarihli <em>Gülistan</em> eserinin 8. Babında (<em>Âdâb-ı Sohbet</em>, Hikmet 80) bu düşüncenin gerçek atası yer alır:",
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
          q: "“I saw a comment on Instagram saying ‘Wrong delivery is the killer of a true word’ and loved it—I want to know its real roots and where it actually comes from.”" },
        { k: "02 · SOURCE EXCAVATION & PRIMARY TEXT",
          b: "Although widely attributed online to <em>Saadi Shirazi</em>, the exact sentence is a modern aphorism rather than a verbatim quote. Yet its direct intellectual ancestor lives in Chapter VIII (<em>On the Rules of Conduct</em>, Maxim 80) of Saadi’s 13th-century <em>Gulistan</em>:",
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
          q: "“‘Güzel bir bahçen olsun, kelebekler gelir; kelebekler gelmese bile güzel bir bahçen olmuş olur.’ Bu alıntıyı çok sevdim; orijinali bu değil tabii ki, Portekizce bir şeymiş ama bunu kendi cümlemle kaydedelim.”" },
        { k: "02 · KÖKEN KAZISI & DİL İZİ",
          b: "Sosyal medyada önce <em>‘Zamanını kelebekleri kovalamakla geçirirsen onlar senden kaçar...’</em> varyantıyla karşılaşıldı. Kökeni araştırıldığında Brezilya Portekizcesinde şair <em>Mário Quintana</em>’ya (çoğu kez <em>O Segredo</em> şiiriyle harmanlanarak) atfedilen çağdaş bir özdeyiş olduğu doğrulandı:",
          orig: "«Cuide do seu jardim que as borboletas vêm até você; e se elas não vierem, você ainda terá um belo jardim.»" },
        { k: "03 · KÖK KAYDI",
          b: "Dışsal bir sonuca, alkışa veya karşılığa bağımlı kalmadan; kişinin kendi yaşam alanını ve iç dünyasını inşa etmesinin başlı başına tamamlanmış bir kazanç olduğunu tutan yaprak." }
      ]
    },
    en: {
      p: ["Cultivate a beautiful garden; the butterflies will come.", "And even if they don't,", "you will still have a beautiful garden."],
      src: "Attributed to Mário Quintana — Portuguese Aphorism",
      steps: [
        { k: "01 · HOW IT WAS FOUND & QUESTIONED",
          q: "“‘Have a beautiful garden and the butterflies will come; even if they don't, you still have a beautiful garden.’ I loved this quote—the original isn't Turkish of course, it turns out to be Portuguese, let's trace and save it.”" },
        { k: "02 · SOURCE EXCAVATION & LINGUISTIC TRACE",
          b: "First encountered in its longer variant (<em>‘If you spend your time chasing butterflies, they fly away...’</em>). Tracing its provenance leads to a contemporary Brazilian Portuguese aphorism widely attributed to poet <em>Mário Quintana</em>:",
          orig: "«Cuide do seu jardim que as borboletas vêm até você; e se elas não vierem, você ainda terá um belo jardim.»" },
        { k: "03 · ROOT RECORD",
          b: "Captures the principle that cultivating one's own living space and inner sanctuary is a complete reward in itself, independent of external applause or reciprocation." }
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
        { k: "01 · ÜÇ AŞAMALI SORGULAMA ZİNCİRİ",
          q: "1) «Kaizen felsefesi bir sorunu oluşmadan çözmektir diye bir laf duydum, bu doğru mu? Teyit eder misin?» → 2) «O zaman benim dediğim söz nereden geliyor, iyice araştırmanı istiyorum.» → 3) «Toyota ve Japonya’yı unut, bu daha felsefik bir şey değil mi? Daha derine inmeni istiyorum.»" },
        { k: "02 · KÖKEN KAZISI (MÜHENDİSLİKTEN ANTİK FELSEFEYE)",
          b: "İlk katmanda sözün <em>Kaizen</em> (sürekli iyileştirme) değil, Toyota mühendisi Tatsuhiko Yoshimura’nın (2002) sistemleştirdiği <em>Mizen Boushi</em> (未然防止 — sorunu meydana gelmeden önlemek) olduğu ayrıştırıldı. Japonya katmanı kaldırılıp felsefi köke inildiğinde ise MÖ 2–4. yüzyıl <em>Huangdi Neijing</em> ve <em>Laozi — Dao De Jing (64. Bab)</em> metinlerine ulaşıldı:",
          orig: "聖人不治已病，治未病 (Huangdi Neijing: «Bilge, oluşmuş hastalığı değil, henüz oluşmamış hastalığı tedavi eder; hastalık çıktıktan sonra ilaç vermek susadıktan sonra kuyu kazmaya benzer.») · 為之於未有，治之於未亂 (Laozi 64: «Henüz var olmadan ilgilen; henüz karışıklık çıkmadan düzenle.»)" },
        { k: "03 · KÖK KAYDI",
          b: "Henüz olmayanı görebilmek — Laozi’nin ‘未有 / henüz var olmayan’ düşüncesiyle akraba. Problem ortaya çıktığında yalnız sonucu görüyoruz; bilgelik, sonucun doğduğu küçük başlangıcı fark etmek olabilir." }
      ]
    },
    en: {
      p: ["Deal with", "a problem before", "it arises."],
      src: "Mizen Boushi (未然防止) · Huangdi Neijing (治未病) · Dao De Jing 64",
      steps: [
        { k: "01 · THREE-STAGE INQUIRY CHAIN",
          q: "1) “I heard that Kaizen philosophy means solving a problem before it occurs—is that true? Can you verify?” → 2) “Then where does the saying I heard actually come from? Dig deeper.” → 3) “Forget Toyota and Japan—isn't this something much more philosophical? Go deeper into its roots.”" },
        { k: "02 · SOURCE EXCAVATION (FROM ENGINEERING TO ANCIENT PHILOSOPHY)",
          b: "First separated from <em>Kaizen</em> (continuous improvement) and traced to Toyota engineer Tatsuhiko Yoshimura’s 2002 discipline <em>Mizen Boushi</em> (未然防止 — preventing a defect before it occurs). Stripping away the industrial layer revealed its ancient philosophical core in the <em>Huangdi Neijing</em> and <em>Laozi’s Dao De Jing (Ch. 64)</em>:",
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
    dateTr: "13 Ekim 2026 · GoodNotes Günlüğü", dateEn: "October 13, 2026 · GoodNotes Journal",
    pillTr: "Köken & Günlük Kaydı · Adventure Time (S3B25)",
    pillEn: "Provenance & Journal Entry · Adventure Time (S3E25)",
    tint: [214, 92, 255],
    size: "md",
    tr: {
      p: ["You're a beautiful flower", "and I love to", "watch you grow."],
      src: "Adventure Time — Joshua’nın Jake’e Sözü (3. Sezon, 25. Bölüm)",
      steps: [
        { k: "01 · NEREDE BULUNDU & EL YAZISI GÜNLÜK KAYDI",
          q: "“Ne zaman böyle cümleler duysam kendimden geçiyorum, bayılıyorum resmen. Cebime atıyorum, kullanmayı beklemek için.” — 13 Ekim 2026, GoodNotes Günlüğü" },
        { k: "02 · SAHNE BAĞLAMI & BİRİNCİL KAYNAK",
          b: "<em>Adventure Time</em> 3. Sezon 25. Bölüm (<em>Dad’s Dungeon</em>): Finn ve Jake’in babaları Joshua’nın zindan boyunca onları sert sınavlardan geçirdikten sonra, son hologram mesajında beklenmedik bir şefkatle bıraktığı kapanış cümlesi.",
          orig: "«You're a beautiful flower, and I love to watch you grow.» — Joshua (Dad's Dungeon)" },
        { k: "03 · KÖK KAYDI",
          b: "Dili değiştirilmeden, duyulduğu ilk andaki çarpıcılığıyla Fikir Ağacı’na ve el yazısı günlüğe olduğu gibi mühürlenen yaprak." }
      ]
    },
    en: {
      p: ["You're a beautiful flower", "and I love to", "watch you grow."],
      src: "Adventure Time — Joshua to Jake (Season 3, Episode 25)",
      steps: [
        { k: "01 · HOW IT WAS FOUND & HANDWRITTEN JOURNAL ENTRY",
          q: "“Whenever I hear sentences like this I lose myself, I absolutely love them. I put it in my pocket, waiting for the right moment to use it.” — October 13, 2026, GoodNotes Journal" },
        { k: "02 · SCENE CONTEXT & PRIMARY SOURCE",
          b: "From <em>Adventure Time</em> Season 3, Episode 25 (<em>Dad’s Dungeon</em>): after putting Finn and Jake through grueling trials across the dungeon, their father Joshua ends his final holographic message with this sudden, disarming tenderness.",
          orig: "«You're a beautiful flower, and I love to watch you grow.» — Joshua (Dad's Dungeon)" },
        { k: "03 · ROOT RECORD",
          b: "Preserved untranslated in the exact English phrasing in which it struck home and was written into the October 13 journal." }
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
          q: "“10:42’de Rota şöyle bir şey diyor: Artık hepimizin her şeye erişiminin bir an olduğunu, bir fikir olduğunu, bir dakikalık bir zihniyet değişimi olduğunu söylüyor; bu çok etkiledi beni.”" },
        { k: "02 · BİRİNCİL KAYNAK & ZAMAN DAMGASI",
          b: "Videoyu izlerken tam <em>10:42</em> saniyesinde durdurularak doğrudan konuşma akışından çıkarıldı ve saniyesiyle arşivlendi.",
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
          q: "“At 10:42 Rota says something that really hit me: that today our access to everything is just one moment, one idea, one minute of mindset shift away.”" },
        { k: "02 · PRIMARY SOURCE & EXACT TIMESTAMP",
          b: "Paused at the exact <em>10:42</em> mark while watching the video, transcribed directly from the spoken passage, and archived with its timestamp.",
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
        { k: "01 · NEREDE BULUNDU?",
          b: "“İyi Bir Dua” etiketli bir görsel paylaşımda karşılaşıldı ve 21 Ekim 2026’da Fikir Ağacı’na kaydedildi." },
        { k: "02 · KÖKEN KAZISI & BİRİNCİL KAYNAK",
          b: "Arapça aslı, 9. yüzyıl bilgini <em>İbn Kuteybe ed-Dîneverî</em>’nin (ö. 889) <em>‘Uyûnü’l-Ahbâr</em> eserinde, <em>Kitâbü’s-Sultân</em> içindeki sır ve sırrı saklama babında “derlerdi ki” kaydıyla aktarılan klasik bir Arap strateji hikmetidir. Bazı derlemelerde (ör. Râgıb el-İsfahânî, <em>ez-Zerîa</em>) aynı söz <em>vehy</em> yerine <em>vehn</em> (zayıflık) kelimesiyle geçer:",
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
        { k: "01 · WHERE IT WAS FOUND",
          b: "Encountered in a shared image captioned “A Good Prayer” and recorded into the Idea Tree on October 21, 2026." },
        { k: "02 · SOURCE EXCAVATION & PRIMARY TEXT",
          b: "The Arabic original is a classical maxim of statecraft preserved by the 9th-century scholar <em>Ibn Qutayba al-Dinawari</em> (d. 889) in his <em>ʿUyūn al-Akhbār</em>, within the <em>Book of Sovereignty</em>’s chapter on secrets and keeping them, introduced with “it used to be said.” Some later compilations (e.g. al-Raghib al-Isfahani’s <em>al-Dharīʿa</em>) read <em>wahn</em> (weakness) instead of <em>wahy</em>:",
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
