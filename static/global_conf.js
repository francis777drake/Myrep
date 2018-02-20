const GlobalConfigs = {
  pageTitle: "play Azino777 games",
  navigationType: ProjectConsts.allNavigationTypes.listMenu,  //can be hamburger, singlePage, listMenu
  useIFramesEverywhere: false,
  homeSitePageUrl: "http://shtorm.top/",
  menuItems: [
    //{icon: 'home', text: 'Главная', url:"http://shtorm.top/"},
    {
      icon: 'list', text: 'Новости',
      url: "http://shtorm.top/", notLoadToIFrame: true
    },
    //{icon: 'photo', text: 'Игры',
    // url:"http://shtorm.top/"},
    {
      icon: 'info', text: 'О нас',
      url: "http://shtorm.top/%D0%9E-%D0%BD%D0%B0%D1%81/"
    },
    {
      icon: 'mail', text: 'Контакты',
      url: "http://shtorm.top/%D0%9A%D0%BE%D0%BD%D1%82%D0%B0%D0%BA%D1%82%D1%8B/"
    },
    {
      icon: 'group', text: 'О разработчике', url: "",
      onClick: function () {
        CSharp.AboutDeveloper();
      }
    }
  ],
  styling: {
    isDarkTheme: 0,
    menuColor: "green darken-3", //from https://vuetifyjs.com/style/colors
    showLogo: false,
    showTitleInMenu: true,
    isMenuFlat: false
  }
}



