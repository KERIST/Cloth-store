const INITIAL_STATE = {
    sections: [
        {
          title: 'hats',
          imageUrl: 'https://images.pexels.com/photos/35185/hats-fedora-hat-manufacture-stack.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          id: 1,
          linkUrl: 'shop/hats'
        },
        {
          title: 'jackets',
          imageUrl: 'https://images.pexels.com/photos/16170/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          id: 2,
          linkUrl: 'shop/jackets'
        },
        {
          title: 'sneakers',
          imageUrl: 'https://images.pexels.com/photos/1032110/pexels-photo-1032110.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          id: 3,
          linkUrl: 'shop/sneakers'
        },
        {
            title: 'suits',
            imageUrl: 'https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?cs=srgb&dl=pexels-pixabay-325876.jpg&fm=jpg',
            size: 'large',
            id: 6,
            linkUrl: 'shop/suits'
        },
        {
          title: 'womens',
          imageUrl: 'https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          size: 'medium',
          id: 4,
          linkUrl: 'shop/womens'
        },
        {
          title: 'mens',
          imageUrl: 'https://images.pexels.com/photos/1049317/pexels-photo-1049317.jpeg?cs=srgb&dl=pexels-helena-lopes-1049317.jpg&fm=jpg',
          size: 'medium',
          id: 5,
          linkUrl: 'shop/mens'
        },
        {
            title: 'shop all',
            imageUrl: 'https://images.pexels.com/photos/7148404/pexels-photo-7148404.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            size: 'medium',
            id: 5,
            linkUrl: 'shop/mens'
          },

      ]
}

const reducer = (state = INITIAL_STATE, action) => {
    switch(action) {
        default: return state;
    }
}

export default reducer;