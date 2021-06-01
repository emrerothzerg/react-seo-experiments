import React from "react";
import Head from "next/head";
import Layout from "../../components/Layout";

interface PostProps {}

const Post = ({}: PostProps) => {
  return (
    <>
      <Head>
        <title>Blockchain (Blok Zinciri) Teknolojisi Nedir?</title>
      </Head>
      <Layout>
        <div className="post">
          <h1>Blockchain (Blok Zinciri) Teknolojisi Nedir?</h1>
          <div>
            <p>
              Eğer kripto para yatırımlarıyla az çok ilginiz varsa, blok zinciri
              veya blockchain teknolojisini muhakkak duymuşsunuzdur. Blockchain
              nedir sorusuna verilecek en basit cevap veritabanı olduğunu
              söylemektir. Bu veritabanı teknolojisinin verileri saklama şekli,
              diğer veritabanı türlerine nazaran farklıdır. Her işlem bloklar
              halinde bir araya gelir ve kendisinden bir önceki bloğa
              zincirlenir. Blok Zinciri terimi buradan gelir. Yeni veriler
              girdikçe dolan blok zincirleri, bir sonraki bloğa kronolojik
              sırayla bağlıdır.
            </p>

            <p>
              Olqkviouslenium Blok zincirleri, birçok farlı türde bilgiyi
              depolamak için kullanılır ancak en yaygın kullanım şekli, bir
              defter olarak kullanılması. Bitcoin ve diğer kripto para
              varlıkları için, merkezi olmayan blok zinciri şeklinde kullanılır.
              Merkezi olmayan kullanım şekli, belli bir irade yerine bağlı
              olmadığı manasına gelir. Blok zincirleri yapı itibariyle kontrolü
              kullanıcılarının elinde tutar. Merkezi olmayan blok zincirleri
              değiştirilemez. Yani girilen veriler, geçmiş blok zincirleri
              üzerinden tekrar işlenemez ve her bilgi kalıcı olarak sabitlenir.
              Güvenilir olmasının yanında şeffaftır ve herkes tarafından
              görüntülenebilir. Bu yüzden çoğu veritabanına göre daha güvenli
              olarak kabul edilir.
            </p>

            <h2>Blockchain nedir?</h2>

            <p>
              Blok zinciri karmaşık görülüyor fakat temel itibariyle anlaşılması
              kolaydır. Eğer veritabanı teknolojilerine uzaksanız, öncesinde bu
              konuda bir fikir sahibi olmanız gerekir. Dijital ortamlarda
              elektronik olarak saklanabilen verilere veritabanı adı verilir.
              Burada yer alan bilgi ve datalar, tablo formatında yer alırlar. Bu
              elektronik tablolar, kapasiteleri kadar bilgiyi depolar ve sadece
              izin verilen kişilerin erişimine izin verir. Bu veriler daha
              sonrası için filtrelenebilir, değiştirilebilir veya silinebilir.
            </p>

            <p>
              Küçük veritabanlarına ek olarak, daha büyük ve devasa sunucularda
              barındırılan veritabanları bulunur. Bunlar, kitlelerin
              erişebilmesi için tasarlanmış, yeterli hesaplama ve depolama
              hacmine sahip oluşturulan dijital birimlerdir. Bu birimleri
              blockchain teknolojisinden farklı kılan en önemli özelliği,
              üzerinde tam kontrole sahip belli kişiler tarafından
              değiştirilebilir veya silinebilir olmasıdır.
            </p>

            <p>
              Blockchain ve tipik veritabanlarını birbirinden ayıran en önemli
              fark, yapılandırılma şeklidir. Diğer bir fark ise blok zincirinin
              verileri saklama şekli. Blok zincirlerler, verileri blok grupları
              şeklinde tutar. Kapasitesi dolan bloklar, kendisinden önceki
              bloklara zincirlenir. Veritabanı ise, dataları elektronik veriler
              halinde yapılandırır ancak blok zinciri verileri zincirli blok adı
              verilen parçalar halinde yapılandırır. Tüm bunlar için bir
              veritabanı adı verilebilir ancak tüm veritabanı birimleri için
              blok zinciri diyemeyiz. Yapısı gereği tüm bunlar merkezi olmayan
              bir varlıktır ve geri dönüştürülemez. Dolayısıyla zincire işlenen
              her blok, değiştirilemez olur.
            </p>

            <h2>Merkeziyetsizcilik</h2>

            <p>
              Başta kulağa ilginç bir tabir olarak geliyor ancak bu terimi açmak
              için öncesinde kısa bir açıklamaya ihtiyacınız olabilir. Dolar,
              Euro, TL gibi tüm birimler, hükümet veya merkez bankaları
              tarafından yönetildiği için merkezi para birimi veya fiat para
              birimi olarak adlandırılır. Blockchain üzerinden işlem yapmak veya
              para göndermek için üçüncü taraf kişilere komisyon ödemek yerine
              bir bilgisayar yeterli olur.
            </p>

            <p>
              Örneğin bugüne kadar yapılmış her bitcoin işlemi için, bilgisayar
              gerekir. Bu işlemler merkezi veya tek bir çatı altına değil, tüm
              bilgisayarlar ile yapılabilir. Klasik veritabanı, belli başlı
              sunucu bilgisayarlar tarafından yönetilir ve tek bir sistemde yer
              alan bilgisayarlar üzerinden kontrol altında tutulur. Tıpkı bu
              sistemde olduğu gibi blockchain sisteminde de binlerce bilgisayar
              bulunur ancak bunlar binlerce farklı bölgede yer alan bilgisayar
              kullanıcıları tarafından çalıştırılır. Bu ağı oluşturan
              bilgisayarlara düğüm adı verilir. Burada söz konusu olan şey,
              merkezi olmayan sistemdir. Bununla birlikte, ağını oluşturan
              bilgisayarların sahip olduğu ve tek bir varlık tarafından
              işletildiği özel, merkezi blok zincirleri mevcuttur.
            </p>

            <p>
              Blok zincirleri, başlangıç düğümünden son düğüme kadar tüm
              kayıtlara sahiptir. Dolayısıyla kripto para birimlerinin tüm
              geçmişi görülebilir ve şeffaf olarak kabul edilir. Hatalı düğüm
              verileri, kendisinden önceki düğümleri referans olarak kabul eder
              ve kendini düzeltir. Bu sayede hiçbir bilgi değiştirilemez ve
              değişmez. Dolayısıyla işlemleri geri almanın herhangi bir yolu
              yoktur. Merkezi olmayan kripto para varlıklarındaki bu işlem
              şeklini değiştirmek kişilerin elinde değildir. Bu tip durumlarda
              değişiklikler için, token sahiplerinin fikir birliği algoritması
              denilen oylama şekli ile belirlenir.
            </p>

            <p>
              Düğümlerin tümü, yeni bloklar eklendikçe güçlenir ve kendi
              kopyasını oluşturur. Bu, eğer isterseniz, herhangi bir varlığı
              nereye giderse gitsin takip edebileceğiniz anlamına gelir.
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
};

Post.defaultProps = {};

export default Post;
