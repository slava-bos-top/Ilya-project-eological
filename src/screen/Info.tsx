import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'

const Info = ({ navigation }: any) => {

  return (
    <ScrollView style={{paddingHorizontal: 15, marginTop: 50}}>
      <View style={{marginBottom: 20, alignItems: "center"}}>
        <Text style={{fontSize: 24, fontWeight: "800", textAlign: "center"}}>Що таке корпоративна екологічна відповідальність?</Text>
      </View>
      <View style={{marginBottom: 20}}>
        <Text>
            Корпоративна екологічна відповідальність стає з кожним роком все більш актуальною і привертає увагу керівників компаній. Компанії, які дотримуються принципів екологічної відповідальності зменшують викиди вуглекислого газу та скорочують кількість відходів, тим самим зменшуючи екологічний слід та підтримуючи цілі сталого розвитку. 
        </Text>
      </View>
      <View style={{marginBottom: 20}}>
        <Text>
            Корпоративна екологічна відповідальність – це один з аспектів соціальної відповідальності, який зобов`язує компанії дбати про довкілля та утримуватися від того, щоб наносити шкоду навколишньому середовищу.  
            Корпоративна екологічна відповідальність стосується екологічних наслідків бізнесових рішень, а також попередження негативного впливу на довкілля. 
        </Text>
      </View>
      <View style={{marginBottom: 20}}>
        <Text>
            На початкових стадіях розвитку концепції про соціальну відповідальність, екологічна відповідальність розглядалась як складова соціальної відповідальності. Але вже і тоді екологічна відповідальність була пріоритетним напрямком. В останні декілька років в наукових колах все частіше говорять про корпоративну екологічну відповідальність як одну з окремих стратегій досягнення цілей сталого розвитку. 
        </Text>
      </View>
      <View style={{marginBottom: 20}}>
        <Text>
            Екологічна відповідальність бізнесу передбачає зменшення відходів, максимальну ефективність використання природних ресурсів, мінімізацію екологічного сліду та запобігання утворенню шкоди майбутнім поколінням.  
            Значення переходу на сталий розвиток як важливий інструмент боротьби з загрозами, які постали перед людством, було визнано в усьому світі. Баланс між економічним зростанням, соціальним розвитком та екологічною рівновагою стають першочерговими у питанні існування людства в глобальному масштабі.  
        </Text>
      </View>
      <View style={{marginBottom: 90}}>
        <Text>
            Дослідження демонструють, що підприємства, які стають на шлях сталого розвитку, покращують фінансові показники, а також збільшують лояльність клієнтів. Ідея корпоративної екологічної відповідальності полягає в тому, щоб віднайти баланс між економічним зростанням та зменшенням негативного впливу на довкілля. 
            Ця відповідальність матиме пролонговану дію і впливатиме на поведінку населення за допомогою інструментів маркетингу. Ідеологами стратегії екологічного маркетингу є К. Хеннісон та К. Кіннеар. Вважається, що ланцюг «корпоративна екологічна відповідальність – екологічний маркетинг – екологічно орієнтоване споживання» стане рушійною силою для досягнення цілей сталого розвитку.
        </Text>
      </View>
    </ScrollView>
  )
}

export default Info