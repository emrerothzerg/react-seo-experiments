import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";

interface PostTwoProps {}

const PostTwo = ({}: PostTwoProps) => {
  return (
    <>
      <Helmet>
        <title>RTX 3090</title>
      </Helmet>
      <Layout>
        <div className="post">
          <h1>RTX 3090</h1>
          <div>
            <p>
              Durmadan gelişen video oyunlarının başarı ölçüsü, sahip oldukları
              grafik dokusu ve derinlik gibi görselliklerle belirleniyor. En iyi
              işletim sistemleri bile iyi bir ekran kartı olmadan üst düzey bir
              oyunu kaldıramaz. Bunun için ekran kartlarının yadsınamaz bir
              öneme sahip olduğunu söylemek yanlış olmaz.
            </p>

            <p>
              Bunagifdleitpina AMD’nin tüm çabalarına rağmen Nvidia’nın RTX 3090
              ekran kartı, hala piyasanın en güçlüsü. Devasa bir soğutucunun
              arkasında yer alan 24 GB GDDR6X RAM’e sahip bu ekran kartı, 3 D
              render ve yüksek çözünürlükteki görüntüleri sorunsuz
              çalıştırabilmenizi sağlıyor. Üretiminden sonra aynı üreticinin bir
              önceki en yüksek performanslı ekran kartı olan RTX 2080 Ti’nin
              yerini almış oldu. AAA olarak nitelendirilen yüksek kaliteli
              oyunlar bile, bu süper güçlü ekran kartı ile 4K performansı süper
              kalitede sunuyor. 8K’da 60 FPS için mükemmel bir performansa sahip
              olduğunu söylemesek de oyun oynayabilmenize olanak sunuyor. Ancak
              gene de en iyi oyunları, 3D animasyonları ve kaliteli video
              oluşturmak için hala çok iyi.
            </p>

            <h2>iyat ve Kullanılabilirlik</h2>

            <p>
              RTX 3090, en büyük rakibi olan Radeon RX 6900XT’ye göre daha
              pahalı. RTX 3090’nın açık ara pazardaki en iyi GPU’ya sahip
              olduğunu söylemek yanlış olmaz ancak aradaki büyük fiyat farkı,
              6900XT’yi daha çekici bir hale getiriyor. Eğer şu anki fiyatının
              pahalı olduğunu düşünüyorsanız, Asus, Zotac ve MSI gibi üçüncü
              taraf üreticilerine titan düzeyindeki sürümlerin fiyatlarını
              bekleyin. Muhtemelen kur farkı ile beraber bir sıfır bir laptop
              fiyatına yakın olabilir.
            </p>

            <p>
              GeForce adı, bu grafik kartının oyunculara yönelik olduğunu
              gösteriyor, ancak teknik özellikler ve fiyatlar, daha çok ham
              işleme gücüne ihtiyaç duyan fakat Nvidia Quadro ve Tesla
              dünyalarına atlamaya tam olarak hazır olmayan tüketicilere yönelik
              olduğunu gösteriyor.
            </p>

            <h2>Özellikler ve Yonga Seti</h2>
            <p>
              Tıpkı RTX 3080 gibi RTX 3090 da GA102 GPU Nvidia Ampere mimarisi
              üzerine inşa edilmiştir. 328 Tensor çekirdeği ve RT çekirdeği ile
              birlikte 10.496 CUDA çekirdeği oluşturan 82 Akış İşlemcisi
              bulunmakta.
            </p>

            <p>
              Nvidia Turin tabanlı Titan RTX, 72 SM’den gelen küçük çıkıntı ve
              Ampere mimarisi ile en çığır açan bir yeniliğe sahip. Bu sayede
              her iki veri yolunun da işleyebilme yeteneğine sahip, FP32 iş
              yükü, SM başına CUDA çekirdek sayısı etkili bir şekilde ikiye
              katlıyor. Bu yüzden RTX 3090, render konusunda mükemmel denilecek
              bir performansa sahip.
            </p>

            <p>
              RTX 3090, 384 bitlik bir veri yolunda 24 GB GDDR6X video belleğini
              de sallıyor, bu da 936 GB / sn bellek bant genişliği sağlıyor. Bu
              da saniyelik neredeyse bir terebayt’lık bir veri akışı manasına
              geliyor. Sahip olduğu devasa VRAM sayesinde, Davinci Resolve,
              Blender, Cinema 4D ve Maya gibi uygulamaları, 3D render yaparken
              hiçbir şekilde zorlanmayacağı manasına gelir. Uzun vadede bunların
              büyük bir zaman tasarruf sağlayacağını söylemek yanlış olmaz.
            </p>

            <p>
              Hem Tensor çekirdekleri hem de Nvidia'nın bu son birkaç ekran
              kartı neslinden bu kadar büyük bir anlaşma yaptığı RT
              çekirdeklerinde RTX 3080’e göre büyük gelişmeler görülmekte. Yani,
              RT çekirdeklerinin verimi, RTX 3000 serisi kartlarda bulunan
              ikinci nesil çekirdeklerle ikiye katlandı.
            </p>

            <p>
              Işın izleme uygulamalarında, SM temelde bir ışık ışını atacak,
              ardından ışın izleme iş yüklerini RT çekirdeklerine aktaracak ve
              burada, sahnenin neresinde geri döndüğünü hesaplayacak ve bu
              verileri SM'ye geri bildirecek. Geçmişte ışın izleme temelde
              gerçek zamanlı olarak yapılamazdı, çünkü SM aynı anda yapmak
              zorunda olduğu herhangi bir rasterleştirmenin yanı sıra tüm
              hesaplamayı kendi başına yapmaktan sorumlu olacaktı.
            </p>

            <p>
              Ancak RT Çekirdeği bu iş yükünün büyük bir kısmını üstlenirken,
              ışın izleme hala hesaplama açısından çok pahalı bir teknolojidir,
              bu da hala ağır bir performans maliyetine sahip olduğu anlamına
              gelir, bu nedenle DLSS hem oyun hem de D5 Render gibi programlarda
              daha önemli bir hale gelmektedir.
            </p>

            <p>
              Nvidia Ampere grafik kartlarında bulunan üçüncü nesil Tensor
              Çekirdekleri de Turing Tensor Core'a göre hızı ikiye katlayarak
              büyük bir gelişme kaydetti. Bununla birlikte, DLSS performansı
              genel olarak 2 kat bir performans artışı görmedi, çünkü her bir SM
              artık tek bir Tensor Çekirdeği paketlerken, Turing'de SM başına
              iki Tensor Çekirdeği vardı.
            </p>

            <h2>TEST SİSTEMİ ÖZELLİKLERİ</h2>
            <ul>
              <li>CPU: AMD Ryzen 9 3950X (16 çekirdekli, 4.7GHz'e kadar)</li>
              <li>
                CPU Soğutucu: Cooler Master Masterliquid 360P Silver Edition
              </li>
              <li>RAM: 64GB Corsair Dominator Platinum @ 3.600MHz</li>
              <li>Anakart: ASRock X570 Taichi</li>
              <li>SSD: ADATA XPG SX8200 Pro @ 1TB</li>
              <li>Güç Kaynağı: Corsair AX1000</li>
              <li>Bag: Praxis Wetbench</li>
            </ul>

            <p>
              RTX 3080 ve RTX 3090 arasındaki fiyat farkı neredeyse iki kat.
              Peki oyun performansı nasıl? Aradaki fark sadece %10- 20 arasında.
              Bu durumda bu performans için bu fiyat ne kadar değer sorusunu
              sormakta haksız değilsiniz. Bu ekran kartının esas kullanım amacı
              için 3B oluşturma ve 8K oyun performansı sunmak. Aynı zamanda 8K
              panellerin yalnızca televizyonlarda yaygın olduğunu göz önünde
              bulunarak monitörlerden alamayacağınız performans için fiyat
              ödeyeceğinizi de unutmayın. Ancak gene de önümüzdeki yıllarda oyun
              bilgisayarlarının monitörlerinin ne kalitede olacağını bilmiyoruz.
            </p>

            <p>
              World of Warcraft: Battle for Azeroth ve Destiny 2 gibi oyunlarda,
              bu son derece yüksek çözünürlükte 60-70 fps sabit bir hız elde
              edilebileceği, ancak tüm göze hitap etmenin açık olması yerine
              yüksek kalite ayarlarıyla. Bu, göründüğü kadar büyük bir kayıp
              değil, çünkü dokuları kapatmak zorunda kalmamak için 24 GB VRAM
              yeterli.
            </p>

            <p>
              Bununla birlikte, Control ve hatta Dark Souls III gibi görsel
              olarak daha yoğun tek oyunculu oyunlara, genellikle 40'larda kare
              hızlarını görüyoruz. Bu hala oynanabilir bir performans ve bu
              kadar yüksek bir çözünürlük için kabul edilebilir olduğu
              söylenebilir. 8K oyun deneyiminin mükelleşme aşamasında olduğunu
              ve benimsenmemiş bir teknoloji olduğunu unutmayın. Bunun bu yüksek
              çözünürlükte oynanabilir kare hızları sağlayabilen ilk grafik
              kartı olduğunu göz önünde bulundurmalısınız, bu nedenle her oyunda
              ipeksi pürüzsüz bir oyun bekleyebilirsiniz. RTX 3090'ın bu
              çözünürlüğün üstesinden gelebilmesi etkileyici. Bununla birlikte
              4K çözünürlükte tüm ayarları en yüksek seviyede kusursuz bir
              performansla sunduğunu unutmayın.
            </p>

            <h2>Sonuç</h2>

            <p>
              Bugün piyasada satın alabileceğiniz en güçlü ekran kartı, Nvidia
              GeForce RTX 3090’dır. 8K oyun performanslarını en yüksek ayarlarda
              dahi muazzam gücüne karşın kusursuz olmasa da iyi bir performans
              ile sunabiliyor. Özellikle profesyonel kodlama, 3B oluşturma ve
              render yapanlar için iyi bir deneyim sunuyor ancak fiyatı
              kesinlikle çok yüksek. Gene de piyasanın en iyi GPU performansı,
              mükemmel bir soğutma sağladığı, profesyoneller için uygun ve 4K
              maksimum ayarda kusursuz olduğunu unutmayın.
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
};

PostTwo.defaultProps = {};

export default PostTwo;
