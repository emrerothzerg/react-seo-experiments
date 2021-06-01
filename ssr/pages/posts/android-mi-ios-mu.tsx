import React from "react";
import Head from "next/head";
import Layout from "../../components/Layout";

interface PostProps {}

const Post = ({}: PostProps) => {
  return (
    <>
      <Head>
        <title>Android mi Daha iyi iOS mu?</title>
      </Head>
      <Layout>
        <div className="post">
          <h1>Android mi Daha iyi iOS mu?</h1>
          <div>
            <p>
              Günümüzün en büyük mobil işletim sistemleri arasında yer alan
              Android ve iOS çeşitli farklılıklara sahip olsalar da hemen hemen
              aynı işlemleri yapabilme özelliklerine sahiplerdir. Günümüzde
              gelişen teknoloji ile birlikte radyo, bilgisayar ve televizyon
              gibi çeşitli aletler eskiye nazaran farklı çalışma prensiplerine
              sahip olmuşlardır. Günümüzde Android ve iOS terimleri, her insanın
              bildiği ve hatta takip ettiği terimlerden olmuştur. Öyle ki her
              yaştan insanlar, bu işletim sistemlerine gelen yeni güncellemeleri
              ve haberleri takip etmekte.
            </p>

            <p>
              Bunagifdleitpina Günümüzün en önemli gelişmelerinden biri olarak
              kabul edilen akıllı mobil cihazlar, hayatımızın bir parçası haline
              gelmiş durumda. Fatura ödemeden maç bileti almaya, görüntülü
              görüşmeden banka müşterisi olmaya kadar birçok şey, bu cihazlar
              sayesinde yapılabilmekte. Elbette günümüzün vazgeçilmezleri
              olmalarının sebebi tüm bunlar ve sayamayacağımız bir diğer
              özelliklerinden ötürü gerçekleşmiştir.
            </p>

            <p>
              Mobil işletim sistemleri arasında en sık kullanılan işletim
              sisteminin Android olması, geniş bir marka yelpazesi ve Apple
              cihazlara göre daha kolay ve uygun fiyatlı ulaşılabilen cihazlar
              olduğu söylenebilir. Ancak gene de dünyanın tek bir markaya ait en
              geniş kullanım alanının iOS işletim sistemli cihazlar olduğu
              söylenebilir. Bu iki işletim sisteminin ortaya çıkış ve gelişim
              süreçlerinin hemen hemen aynı dönemde olması, yüksek rekabeti de
              beraberinde getirmiştir. Uzun yıllardan beri süren bu işletim
              sistemleri arasındaki rekabet, günümüzde hız kesmeden devam
              etmekte. Bu yüzden her iki işletim sistemi ve marka
              geliştiricileri, daha küçük, daha güçlü ve daha hızlı işletim
              sistemleri, devre elemanları ve anakartları üzerindeki
              çalışmalarına devam etmekte.
            </p>

            <h2>Android ve İos İşletim Sistemleri Arasındaki Temel Farklar</h2>

            <p>
              İki işletim sistemi dışarıdan bakıldığında birbirine benzer işleri
              yüklenebiliyor olsalar da temelde yazılım dilleri ve kullanım
              şekilleri birbirinden tamamen farklıdır. Apple şirketinin
              geliştirdiği iOS işletim sistemi kapalı kaynaklıdır ve üzerinde
              herhangi bir oynama yapılamaz.
            </p>

            <p>
              Android işletim sistemini iOS'tan farklı kılan en büyük özelliği,
              açık kaynaklı olması ve Java dili ile yazılmış olması. Bu
              teknolojinin gelişiminin arkasındaki teknolojik güç ise
              Google’dır. Google şirketi, Handset Alliance firmasıyla kurduğu
              ortaklık ile geliştirdiği Android, Linux alt yapılı, ücretsiz ve
              .apk uzantını desteklemekte. Apple öncülüğünde geliştirilen iOS
              ise 4 işletim katmanlı bir sistemdir.
            </p>

            <h2>Android ve iOS Güvenlik Yöntemleri</h2>

            <p>
              Kullanım açısından Android cihazlar daha kolay gibi görünse tek
              yönlü arayüzü iOS'u daha basit kılıyor. Android işletim sistemleri
              virüs ve zararlı yazılımlara karşı daha açık ve hassaslardır.
              Ancak iOS Android’e oranla virüse karşı daha etkili çözümler
              sunar. Resmi mağazalar ve MAC uyumlu cihazlar dışında farklı
              cihazlardan herhangi bir şekilde dosya alınamaz veya indirilemez.
              Yani iOS işletim sistemlerine uygulama indirebilmek için sadece
              App Store kullanılır. RAM hızları Android’e göre daha yavaş olsa
              da işletim sistemi daha kuvvetli ve çoklu görevlerde
              başarılılardır.
            </p>

            <p>
              Android açık kaynaklı bir işletim sistemi olduğundan, her
              kaynaktan ve cihazdan dosya indirmeye ve almaya izin verir ancak
              virüslere karşı korumasızdır. Diğer bir dezavantajı ise
              bataryalarının daha kalitesiz, düşük performanslı ve çoklu
              görevlerde kolay ısınıyor olması. Dolayısıyla yüksek sistem
              gereksinimine sahip oyunlardaki performansı daha düşüktür. Gene de
              bu iki işletim sistemi arasında akıllı kopyalama gibi ortak
              özellikler de yer alabilir. Bu kopyalama sistemi, daha önce
              girilen şifre verilerini onay verildiği taktirde kaydeder ve
              telefonlardaki e-postaların bulut tabanına yükler. Böylece
              telefonlar sıfırlandığında aynı e-posta ile kurulum yapıldıktan
              sonra hatırlatma özelliğini kullanır.
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
};

Post.defaultProps = {};

export default Post;
