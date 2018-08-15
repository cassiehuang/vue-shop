export default {
  scrollHeight: 0,
  isShowSearchBar: false,
  isShowMask: false,
  sliders: [],
  hotShop: [],
  products: [],
  num: 5,
  busy: false,
  isShowLoadingTips: false,
  isShowLoadedTips: false,
  navItem: [
    {
      name: '首页',
      url: '/home'
    },
    {
      name: '分类',
      url: '/sort'
    },
    {
      name: '购物车',
      url: '/shoppingCar'
    },
    {
      name: '我的',
      url: '/my'
    }
  ],
  tags: [
    {
      name: '美食',
      url: 'food',
      sort: [
        {
          name: '全部',
          url: 'all'
        },
        {
          name: '零食',
          url: 'snack'
        },
        {
          name: '水果',
          url: 'fruit'
        },
        {
          name: '方便食物',
          url: 'convenient'
        },
        {
          name: '饼干',
          url: 'biscuits'
        },
        {
          name: '饮料',
          url: 'drink'
        }
      ]
    },
    {
      name: '服装',
      url: 'clothing',
      sort: [
        {
          name: '全部',
          url: 'all'
        }
      ]
    },
    {
      name: '配饰',
      url: 'accessories',
      sort: [
        {
          name: '全部',
          url: 'all'
        }
      ]
    },
    {
      name: '箱包',
      url: 'luggage',
      sort: [
        {
          name: '全部',
          url: 'all'
        }
      ]
    },
    {
      name: '鞋靴',
      url: 'shoe',
      sort: [
        {
          name: '全部',
          url: 'all'
        }
      ]
    },
    {
      name: '美容护肤',
      url: 'cosmetic',
      sort: [
        {
          name: '全部',
          url: 'all'
        }
      ]
    },
    {
      name: '家居',
      url: 'house',
      sort: [
        {
          name: '全部',
          url: 'all'
        }
      ]
    },
    {
      name: '3C数码',
      url: '3c',
      sort: [
        {
          name: '全部',
          url: 'all'
        }
      ]
    },
    {
      name: '母婴',
      url: 'baby',
      sort: [
        {
          name: '全部',
          url: 'all'
        }
      ]
    }
  ],
  detail: {},
  userName: '',
  userId: null,
  isLogin: false
}
