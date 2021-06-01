import React from "react";
import Head from "next/head";
import Layout from "../../components/Layout";

interface PostProps {}

const Post = ({}: PostProps) => {
  return (
    <>
      <Head>
        <title>Bilgisayarların Gelişimi</title>
      </Head>
      <Layout>
        <div className="post">
          <h1>Bilgisayarların Gelişimi</h1>
          <div>
            <p>
              Günümüzde hızla gelişen teknolojideki en büyük pay şüphesiz
              bilgisayarlardır. Cep telefonlarından arabalara kadar endüstriyel
              çağda üretilen hemen her teknolojik ürün, günümüzün süper
              bilgisayarlarındaki tasarımlarla elde edilir. Peki bu çağa gelene
              kadar bilgisayarlar nasıl bir gelişim süreci izledi?
            </p>

            <p>
              Etqreweosqhlius Günümüzdeki süper bilgisayarlarından çok önce,
              dünyanın ilk modern bilgisayarı J. Presper Eckert ve John W.
              Mauchly ve öncülüğünde iki ekip tarafından 30 ton büyüklüğünde 500
              dolar bütçeyle üretilmiş (bugünün parasıyla yaklaşık 38 milyon
              lira) ENIAC adında devasa bir icattı. Ancak 1946 yılında üretilen
              ve ilk dijital bilgisayar olarak kabul edilen 167 metre karelik bu
              devasa cihazın atası George Boole’dir. Mucidinin adıyla anılan
              1850 yılında bu keşif 1 ve 0 rakam sistemini kullanan ilk buluştu.
              Günümüzdeki bilgisayarlar hala bu sistem prensibine bağlı olarak
              çalışırlar.
            </p>

            <h2>İlk Kişisel Bilgisayarlara Geçiş</h2>

            <p>
              George Bool’in bu icadından sonra 2. Dünya savaşından sonra Haward
              Aitken ve 410 bin çalışanıyla dünyanın dört bir köşesinde hizmet
              vermeye devam eden IBM ortaklığıyla MARK I üretildi. Amerikan
              ordusu için üretilen EIAC isimli bilgisayarın ardından modern
              bilgisayarların gelişimi önü gelmeyecek şekilde gelişmeye başladı.
            </p>

            <p>
              1952 yılında satışa sunulan DEVAC ve UNIVAC üretildi. IBM’in
              öncülüğünde çıkarılan MARK I, bu bilgisayarlara oranla daha hızlı
              ve daha gerçek bir bilgisayardı. Vakum tüplü olan bu bilgisayar
              1958 yılında IBM tarafından üretilen yeni bir bilgisayar yerini
              diotlu bilgisayarlara bıraktı. Bu bilgisayar ENIAC’a göre daha az
              ısınıyor ve Disk, tambur ve depolama alanı gibi günümüze kadar
              uzanacak olan yeniliklerle donatılmıştı. Maliyeti düşürmek ve daha
              güvenilir bilgisayarlar üretmek amacıyla 1968’de diotlar yerini
              devrelere bıraktı. Böylece hem daha az maliyetli hem de daha küçük
              bir hale gelebildiler.
            </p>

            <p>
              1960 yıllarda elektron tüpler yerini transistorlara bıraktı. Bu
              yıldan itibaren üretilen bilgisayarlar kendileri arasında iletişim
              kurabilme özelliğine sahipti. Bileşim tarihinde 4 ayrı döneme
              ayrılan bilgisayarlar 1972 yılında son evresine ulaştı. 1950-1958
              yıllarında 1 kuşak, 1958-1964 yıllarında 2. Kuşak, 1965-1971
              yıllarında üretilen bilgisayarlara ise 3. Kuşak isimleri verildi.
            </p>

            <h2>Modern İşletim Sistemleri ve Rekabet Savaşları</h2>

            <p>
              Bugün 172 ülkede hizmet veren ve Dünyanın en büyük teknoloji devi
              olarak IBM firması International Business Machines; Uluslararası
              İş Makineleri) yazılım, servis hizmetleri ve bilgisayar
              donanımları araştırmasına hız vererek yeni nesil bilgisayarların
              öncüsü oldu. Takip eden dönemde yeni nesil bilgisayarlarla
              piyasaya giren Apple firması önce IBM, daha sonra da günümüzün
              işletim sistemi üreticileri Apple ve Microsoft firmalarının
              savaşlarına sahne oldu.
            </p>

            <p>
              Steve Jobs öncülüğünde Apple, Bill Gates öncülüğündeki Microsoft
              firmasıyla karşı karşıya geldi. Steve Jops’un xerox’dan
              esinlendiği pencereli grafik arabirimlerini en büyük hayali olan
              MAC’e entegre etmesinin ardından Bill Gates ve arkadaşlarının
              kendi işletim sistemlerine dahil etmesi, savaşın tetikleyicisi
              olmuştu. Ancak Apple firmasının çok tartışmaya sebep olan yalnızca
              kendi sistemlerinde kendi donanımlarını üretmesi günümüze kadar
              uzanan PC-MAC ayrışmasına sebep olmuştu.
            </p>

            <p>
              Apple firmasının aksine Microsoft IBM ile yaptığı anlaşma
              sayesinde işletim sistemleri Dünya üzerindeki tüm bilgisayarlarda
              kullanılabiliyordu. Devam eden yeni gelişmeler Apple firmasının
              yeni bir atılımla ceplerimize kadar inen mini bilgisayarlara kadar
              uzandı. Bu cihazların adı iPhone’du. Yeni icatlar Apple firmasını
              yeni devlerle karşı karşıya getirdi ve Google’ın Andoid işletim
              sistemiyle yeni bir savaş cephesi açılmış oldu. Apple firması
              telif haklarını koruma adına hemen her firmaya dava açmaktan ve
              haklarını savunmaktan hiçbir zaman vazgeçmedi.
            </p>

            <p>
              Tüm bunlar yaşanırken şu an dünyanın her alanında kullanılmakta
              olan bilgisayarlar kullanım alanlarına göre şekillendi. Düşük
              maliyetli, güçlü ve düşük enerjili bilgisayarlar için iki işlemci
              seti öne çıktı. AMD ve INTEL firması günümüzde en iyi performans
              sergileyen bilgisayarları üretmek için neredeyse her gün yeni
              teknolojiler için çalışmakta. Thunderbold 3, Optane Bellek gibi
              yeni nesil teknolojilerle Google, Hp, Dell gibi firmalarla ortak
              çalışmalar yaparak öne çıkmaya çalışırken AMD ise Asus gibi PC
              üretim devi ve anakart üreticileriyle oyun tutkunlarına özel süper
              işlemciler üreterek fark yaratmaya çalışıyorlar. Kuşkusuz
              teknolojide hiçbir şey eskisi gibi olmayacak ve bizi yeni gelecek
              bize yeni teknolojiler getirecek.
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
};

Post.defaultProps = {};

export default Post;
