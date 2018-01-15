import Vue from 'vue'
import routes from './routes'

const app = new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname,
      orders: [
          {id: "152956",  pack: "130", date: "20 Декабря 2017 09:14", date_delivery:"22 Декабря 2017",
              realization:"Доставка", name:"Элиза", delivery_address: "Челябинск<br> Г КОПЕЙСК УЛ ТЮЛЕНИНА дом. 1",
              time_delivery:"10-15:30", form_pay: "Наличные", sum: "11298", edit:"Редактор", courier:"Катя Чел"},
          {id: "152957",  pack: "30", date: "20 Декабря 2017 09:14", date_delivery:"22 Декабря 2017",
              realization:"Доставка", name:"Элиза", delivery_address: "Тюмень<br> Г КОПЕЙСК УЛ ТЮЛЕНИНА дом. 1",
              time_delivery:"10-15:30", form_pay: "Наличные", sum: "11298", edit:"Редактор", courier:"Катя Чел"},
          {id: "152958",  pack: "30", date: "20 Декабря 2017 09:14", date_delivery:"22 Декабря 2017",
              realization:"Доставка", name:"Элиза", delivery_address: "Екатеринбург<br> Г КОПЕЙСК УЛ ТЮЛЕНИНА дом. 1",
              time_delivery:"10-15:30", form_pay: "Наличные", sum: "11298", edit:"Редактор", courier:"Катя Чел"},
          {id: "152959",  pack: "30", date: "20 Декабря 2017 09:14", date_delivery:"22 Декабря 2017",
              realization:"Доставка", name:"Элиза", delivery_address: "Почта<br>ФИО адресата: Забродина Екатерина Сергеевна<br>Индекс: 426039<br>Регион: Удмуртская республика<br>Город: Ижевск<br>воткинское шоссе дом. 39 кв. 71",
              time_delivery:"10-15:30", form_pay: "Наличные", sum: "11298", edit:"Редактор", courier:"Катя Чел"},
          {id: "152950",  pack: "30", date: "20 Декабря 2017 09:14", date_delivery:"22 Декабря 2017",
              realization:"Доставка", name:"Элиза", delivery_address: "<b>Самовывоз:</b><br>Екатеринбург<br>ул.Завокзальная 36, офис 313-314",
              time_delivery:"10-15:30", form_pay: "Наличные", sum: "11298", edit:"Редактор", courier:"Катя Чел"},
          {id: "152951",  pack: "30", date: "20 Декабря 2017 09:14", date_delivery:"22 Декабря 2017",
              realization:"Доставка", name:"Элиза", delivery_address: "Уфа<br> Г КОПЕЙСК УЛ ТЮЛЕНИНА дом. 1",
              time_delivery:"10-15:30", form_pay: "Наличные", sum: "11298", edit:"Редактор", courier:"Катя Чел"},
          {id: "152952",  pack: "30", date: "20 Декабря 2017 09:14", date_delivery:"22 Декабря 2017",
              realization:"Доставка", name:"Элиза", delivery_address: "Нижний тагил<br> Г КОПЕЙСК УЛ ТЮЛЕНИНА дом. 1",
              time_delivery:"10-15:30", form_pay: "Наличные", sum: "11298", edit:"Редактор", courier:"Катя Чел"},
          {id: "152956",  pack: "30", date: "20 Декабря 2017 09:14", date_delivery:"22 Декабря 2017",
              realization:"Доставка", name:"Элиза", delivery_address: "Челябинск<br> Г КОПЕЙСК УЛ ТЮЛЕНИНА дом. 1",
              time_delivery:"10-15:30", form_pay: "Наличные", sum: "11298", edit:"Редактор", courier:"Катя Чел"},
          {id: "152957",  pack: "30", date: "20 Декабря 2017 09:14", date_delivery:"22 Декабря 2017",
              realization:"Доставка", name:"Элиза", delivery_address: "Тюмень<br> Г КОПЕЙСК УЛ ТЮЛЕНИНА дом. 1",
              time_delivery:"10-15:30", form_pay: "Наличные", sum: "11298", edit:"Редактор", courier:"Катя Чел"},
          {id: "152958",  pack: "30", date: "20 Декабря 2017 09:14", date_delivery:"22 Декабря 2017",
              realization:"Доставка", name:"Элиза", delivery_address: "Екатеринбург<br> Г КОПЕЙСК УЛ ТЮЛЕНИНА дом. 1",
              time_delivery:"10-15:30", form_pay: "Наличные", sum: "11298", edit:"Редактор", courier:"Катя Чел"},
          {id: "152959",  pack: "30", date: "20 Декабря 2017 09:14", date_delivery:"22 Декабря 2017",
              realization:"Доставка", name:"Элиза", delivery_address: "Почта<br>ФИО адресата: Забродина Екатерина Сергеевна<br>Индекс: 426039<br>Регион: Удмуртская республика<br>Город: Ижевск<br>воткинское шоссе дом. 39 кв. 71",
              time_delivery:"10-15:30", form_pay: "Наличные", sum: "11298", edit:"Редактор", courier:"Катя Чел"},
          {id: "152950",  pack: "30", date: "20 Декабря 2017 09:14", date_delivery:"22 Декабря 2017",
              realization:"Доставка", name:"Элиза", delivery_address: "<b>Самовывоз:</b><br>Екатеринбург<br>ул.Завокзальная 36, офис 313-314",
              time_delivery:"10-15:30", form_pay: "Наличные", sum: "11298", edit:"Редактор", courier:"Катя Чел"},
          {id: "152951",  pack: "30", date: "20 Декабря 2017 09:14", date_delivery:"22 Декабря 2017",
              realization:"Доставка", name:"Элиза", delivery_address: "Уфа<br> Г КОПЕЙСК УЛ ТЮЛЕНИНА дом. 1",
              time_delivery:"10-15:30", form_pay: "Наличные", sum: "11298", edit:"Редактор", courier:"Катя Чел"},
          {id: "152952",  pack: "30", date: "20 Декабря 2017 09:14", date_delivery:"22 Декабря 2017",
              realization:"Доставка", name:"Элиза", delivery_address: "Нижний тагил<br> Г КОПЕЙСК УЛ ТЮЛЕНИНА дом. 1",
              time_delivery:"10-15:30", form_pay: "Наличные", sum: "11298", edit:"Редактор", courier:"Катя Чел"},
          {id: "152956",  pack: "30", date: "20 Декабря 2017 09:14", date_delivery:"22 Декабря 2017",
              realization:"Доставка", name:"Элиза", delivery_address: "Челябинск<br> Г КОПЕЙСК УЛ ТЮЛЕНИНА дом. 1",
              time_delivery:"10-15:30", form_pay: "Наличные", sum: "11298", edit:"Редактор", courier:"Катя Чел"},
          {id: "152957",  pack: "30", date: "20 Декабря 2017 09:14", date_delivery:"22 Декабря 2017",
              realization:"Доставка", name:"Элиза", delivery_address: "Тюмень<br> Г КОПЕЙСК УЛ ТЮЛЕНИНА дом. 1",
              time_delivery:"10-15:30", form_pay: "Наличные", sum: "11298", edit:"Редактор", courier:"Катя Чел"},
          {id: "152958",  pack: "30", date: "20 Декабря 2017 09:14", date_delivery:"22 Декабря 2017",
              realization:"Доставка", name:"Элиза", delivery_address: "Екатеринбург<br> Г КОПЕЙСК УЛ ТЮЛЕНИНА дом. 1",
              time_delivery:"10-15:30", form_pay: "Наличные", sum: "11298", edit:"Редактор", courier:"Катя Чел"},
          {id: "152959",  pack: "30", date: "20 Декабря 2017 09:14", date_delivery:"22 Декабря 2017",
              realization:"Доставка", name:"Элиза", delivery_address: "Почта<br>ФИО адресата: Забродина Екатерина Сергеевна<br>Индекс: 426039<br>Регион: Удмуртская республика<br>Город: Ижевск<br>воткинское шоссе дом. 39 кв. 71",
              time_delivery:"10-15:30", form_pay: "Наличные", sum: "11298", edit:"Редактор", courier:"Катя Чел"},
          {id: "152950",  pack: "30", date: "20 Декабря 2017 09:14", date_delivery:"22 Декабря 2017",
              realization:"Доставка", name:"Элиза", delivery_address: "<b>Самовывоз:</b><br>Екатеринбург<br>ул.Завокзальная 36, офис 313-314",
              time_delivery:"10-15:30", form_pay: "Наличные", sum: "11298", edit:"Редактор", courier:"Катя Чел"},
          {id: "152951",  pack: "30", date: "20 Декабря 2017 09:14", date_delivery:"22 Декабря 2017",
              realization:"Доставка", name:"Элиза", delivery_address: "Уфа<br> Г КОПЕЙСК УЛ ТЮЛЕНИНА дом. 1",
              time_delivery:"10-15:30", form_pay: "Наличные", sum: "11298", edit:"Редактор", courier:"Катя Чел"},
          {id: "152952",  pack: "30", date: "20 Декабря 2017 09:14", date_delivery:"22 Декабря 2017",
              realization:"Доставка", name:"Элиза", delivery_address: "Нижний тагил<br> Г КОПЕЙСК УЛ ТЮЛЕНИНА дом. 1",
              time_delivery:"10-15:30", form_pay: "Наличные", sum: "11298", edit:"Редактор", courier:"Катя Чел"}
      ]
  },
  computed: {
    ViewComponent () {
      const matchingView = routes[this.currentRoute];
      return matchingView
        ? require('./pages/' + matchingView + '.vue')
        : require('./pages/404.vue')
    }
  },
  render (h) {
    return h(this.ViewComponent)
  }
});

window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname
});
