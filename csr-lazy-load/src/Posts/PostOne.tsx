import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";

interface PostOneProps {}

const PostOne = ({}: PostOneProps) => {
  return (
    <>
      <Helmet>
        <title>Mobil İşletim Sistemleri</title>
      </Helmet>
      <Layout>
        <div className="post">
          <h1>Mobil İşletim Sistemleri</h1>
          <div>
            <p>
              Android, iOS veya Windows Phone- hangi işletim sistemi en
              iyisidir? Yeni bir akıllı telefon pazarındaysanız, farklı işletim
              sistemlerini merak ediyor olabilirsiniz. İhtiyaçlarınız için doğru
              olanı seçmenize yardımcı olmak için, burada mobil işletim
              sistemlerinin nasıl çalıştığına ve aralarındaki farklara daha
              yakından bakalım. Peki mobil işletim sistemleri nelerdir?
            </p>

            <h2>Mobil işletim sistemi nedir?</h2>
            <p>
              Etqreweosqhlius "Mobil işletim sistemi" olarak da bilinen bir
              sistem, özellikle akıllı telefonlar, tabletler ve kişisel dijital
              asistanlar (PDA'lar) gibi elde taşınan cihazlar için tasarlanmış
              bir yazılımdır. İşletim sisteminizi, cihazınız için bilgisayarlı
              talimatlar gibi düşünebilirsiniz. Telefonunuzun tüm işlevlerini ve
              özelliklerini yönetir, tuş vuruşlarını ve kaydırmaları yorumlar ve
              sizi mobil ve Wi-Fi ağlarına bağlar. Bir mobil işletim sistemi,
              kişisel bilgisayarlarda görülen aynı işlevlerin çoğunu, özellikle
              mobil cihazlara yönelik bir dizi şık ek özellik ile birlikte
              sağlar. Bunlar, dokunmatik ekran işlevselliği, GPS mobil
              navigasyon, bluetooth, yakın alan iletişimi (NFC) teknolojisi ve
              çok daha fazlasını içerir.
            </p>

            <h2>Üç ana işletim sistemi nelerdir?</h2>
            <ul>
              <li>
                Android İşletim Sistemi: Android, Google tarafından
                geliştirilmiş açık kaynaklı bir mobil işletim sistemidir.
                Samsung, Sony, LG, HTC, Motorola ve tabii ki Google dahil olmak
                üzere çeşitli avuç içi cihaz üreticileri için tercih edilen
                işletim sistemidir.
              </li>
              <li>
                Apple iOS: Apple tarafından oluşturulan iOS, tüm iPhone'larda,
                iPad'lerde ve iPod Touch'ta kullanılan popüler bir mobil işletim
                sistemidir. iOS, tescilli (kapalı kaynak) bir mobil işletim
                sistemidir; bu, yalnızca Apple ürünlerinde bulunabileceği
                anlamına gelir. 2007'de piyasaya sürüldüğünden beri neredeyse
                her yıl iOS işletim sisteminin yeni sürümleri çıkmaktadır.
              </li>
              <li>
                Windows Phone (WP): Windows Phone, değiştirilebilir kutucuklara
                sahip benzersiz bir ara yüze sahip, Microsoft'un tescilli bir
                mobil işletim sistemidir.
              </li>
            </ul>

            <p>
              Android, dünyadaki en yaygın kullanılan mobil işletim sistemidir.
              Git gide de kullanıcı sayısını genişleten Android işletim
              sisteminin en büyük rakibi İOS olarak karşımıza çıkmaktadır. What
              Phone'a göre, bazı insanlar Android cihazların takılması söz
              konusu olduğunda daha yüksek bir öğrenme eğrisi olduğunu
              görebilir. Basit ve zarif bir işletim sistemi olan iOS, tüm Apple
              cihazlarında güvenilir ve tutarlı bir kullanıcı deneyimi sağlar.
              Ayrıca, yalnızca iOS'ta kullanılabilen popüler görüntülü sohbet
              ürünü FaceTime dahil olmak üzere 2 milyon uygulama ile uyumludur.
              Öte yandan, özelleştirme söz konusu olduğunda kullanıcılarına daha
              az esneklik tanımaktadır ve iOS cihazların fiyatları ölçeğin en
              üst noktasına doğru olma eğilimindedir.
            </p>

            <p>
              Android ve Apple’ın iOS’u kadar popüler olmasa da Windows Phone
              güvenilir ve kişiselleştirilmiş bir kullanıcı deneyimi sunar ve
              diğer Microsoft ürünleriyle tamamen uyumludur. Buradaki
              dezavantaj, Android ve iOS cihazlara kıyasla sınırlı sayıda
              uygulamanın mevcut olmasıdır.
            </p>

            <h2>Android:</h2>
            <ul>
              <li>
                Telefonunuzu kişiselleştirmek isterseniz, Android pil
                göstergenizi, kişi listenizi, ses ve erişilebilirlik
                ayarlarınızı ve çok daha fazlasını özelleştirmenize olanak
                tanır.
              </li>
              <li>
                Android cihazlar, bütçenize uyacak şekilde çok çeşitli ekran
                boyutları, ağırlıkları ve fiyatları ile gelir.
              </li>
              <li>
                Başka hiçbir mobil işletim sisteminde bulunmayan zaman
                kazandıran widget'lara sahiptir.
              </li>
              <li>Google ürün ve hizmetlerinin hayranıysanız iyi bir seçim.</li>
            </ul>

            <h2>iOS:</h2>
            <ul>
              <li>
                Temiz ve sezgisel arayüzü ile iOS, kutudan çıkar çıkmaz basitlik
                ve güvenilirlik sunar.
              </li>
              <li>
                iTunes ve iCloud gibi diğer Apple ürünleri ve hizmetleriyle
                sorunsuz bir şekilde bütünleşir.
              </li>
              <li>
                Çok çeşitli uygulamalar ve Apple aksesuarlarıyla uyumludur.
              </li>
              <li>
                İlk kez akıllı telefon kullanıcıları veya Apple ürünlerine zaten
                sahip olanlar için iyi bir seçimdir.
              </li>
            </ul>

            <h2>Windows Phone:</h2>
            <ul>
              <li>
                İşlevsellik, rahatlık ve kullanımı kolay bir arayüz sunar.
              </li>
              <li>
                Office, PowerPoint ve Exchange gibi Microsoft yazılımlarıyla
                kolayca entegre olur.
              </li>
              <li>
                "Metro" olarak da bilinen yenilikçi bir karo tabanlı arayüz ve
                verileri hızlı ve kolay bir şekilde düzenlemenize olanak tanıyan
                işlevsel merkezler içerir.
              </li>
              <li>
                Günlük görevler için Microsoft ürünlerine güvenen kişiler için
                iyi bir seçenektir.
              </li>
            </ul>
          </div>
        </div>
      </Layout>
    </>
  );
};

PostOne.defaultProps = {};

export default PostOne;
