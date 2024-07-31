import React from 'react';
import { ContainerProduct, Icon, TagType } from '../components';

export interface IBaseType {
  id: string;
  name: string;
  type: string;
  order: number;
}

export interface IBaseProd {
  id: number;
  type: string;
  name: string;
  products: Array<IBaseProdItem>;
}

export interface IBaseProdItem {
  id: string;
  url: string;
  name: string;
  price: number;
  isHot?: boolean;
  isNew?: boolean;
  isBestSeller?: boolean;
  size?: Array<{
    size: string;
    price: number | null;
  }>;
  base?: string[];
};

export const ShopingPage: React.FunctionComponent = () => {
  // const user = useRecoilValue<userInfo>(userState);
  const types: IBaseType[] = [
    {
      id: '1',
      name: 'Pizza',
      type: 'PIZZA',
      order: 0
    },
    {
      id: '2',
      name: 'Drink',
      type: 'DRINK',
      order: 1
    },
  ];
  const prods: IBaseProd[] = [
    {
      id: 1,
      type: 'PIZZA',
      name: 'Pizza',
      products: [
        {
          id: '1',
          url: 'http://thepizzacompany.vn/images/thumbs/000/0002624_seafood-pesto_300.png',
          name: 'Pizza Hải Sản Pesto Xanh',
          price: 240000,
          size: [
            {
              size: 'Small 6``',
              price: null,
            },
            {
              size: ' Medium 9``',
              price: 80000,
            },
          ],
          base: ['Thick', 'Thin and Spicy']
        },
        {
          id: '2',
          url: 'http://thepizzacompany.vn/images/thumbs/000/0002624_seafood-pesto_300.png',
          name: 'Pizza Phở',
          price: 2400000,
          size: [
            {
              size: 'Small 6``',
              price: null,
            },
            {
              size: ' Medium 9``',
              price: 160000,
            },
          ],
          base: ['Thick', 'Thin and Spicy']
        },
        {
          id: '3',
          url: 'http://thepizzacompany.vn/images/thumbs/000/0002624_seafood-pesto_300.png',
          name: 'Pizza Phở',
          price: 2400000,
          size: [
            {
              size: 'Small 6``',
              price: null,
            },
            {
              size: ' Medium 9``',
              price: 160000,
            },
          ],
          base: ['Thick', 'Thin and Spicy']
        },
        {
          id: '4',
          url: 'http://thepizzacompany.vn/images/thumbs/000/0002624_seafood-pesto_300.png',
          name: 'Pizza Phở',
          price: 2400000,
          size: [
            {
              size: 'Small 6``',
              price: null,
            },
            {
              size: ' Medium 9``',
              price: 160000,
            },
          ],
          base: ['Thick', 'Thin and Spicy']
        },
        {
          id: '5',
          url: 'http://thepizzacompany.vn/images/thumbs/000/0002624_seafood-pesto_300.png',
          name: 'Pizza Phở',
          price: 2400000,
          size: [
            {
              size: 'Small 6``',
              price: null,
            },
            {
              size: ' Medium 9``',
              price: 160000,
            },
          ],
          base: ['Thick', 'Thin and Spicy']
        },
      ],
    },
    {
      id: 2,
      type: 'DRINK',
      name: 'Thức uống',
      products: [
        {
          id: '1',
          url: 'https://thepizzacompany.vn/images/thumbs/000/0002573_pepsi-lime-can_300.png',
          name: 'Pepsi',
          price: 40000,
        },
        {
          id: '2',
          url: 'https://thepizzacompany.vn/images/thumbs/000/0002573_pepsi-lime-can_300.png',
          name: 'CocaCola',
          price: 40000,
        },
        {
          id: '3',
          url: 'https://thepizzacompany.vn/images/thumbs/000/0002573_pepsi-lime-can_300.png',
          name: 'CocaCola',
          price: 40000,
        },
      ],
    },
  ];

  const goToProductType = (type: string) => {
    const htmlTypeId = 'tt-type-' + type.toLowerCase();
    const elm = document.getElementById(htmlTypeId);
    console.log(elm)
    if (elm) {
      elm.scrollIntoView();
    }
  }
  return (
    <main className='tt-page tt-shoping'>
      <section className='tt-section-container tt-shoping-types'>
        {
          types.map(type => <TagType key={type.id} onClick={() => goToProductType(type.name)} suffix={type.type.toLowerCase()} iconWidth='20px'>{type.name}</TagType>)
        }
      </section>

      <section className='tt-section-container tt-shoping-prods'>
        {
          prods.map(prod => <ContainerProduct key={prod.id} prod={prod}></ContainerProduct>)
        }
      </section>

      <button className='tt-shoping-cart'>
        <Icon icon='cart' width='20px'></Icon>
      </button>
    </main>
  );
}