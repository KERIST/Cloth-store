const INITIAL_STATE = {
    sections: [
        {
          title: 'hats',
          imageUrl: 'https://images.pexels.com/photos/35185/hats-fedora-hat-manufacture-stack.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          id: 1,
          linkUrl: 'store/hats'
        },
        {
          title: 'jackets',
          imageUrl: 'https://images.pexels.com/photos/16170/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          id: 2,
          linkUrl: 'store/jackets'
        },
        {
          title: 'sneakers',
          imageUrl: 'https://images.pexels.com/photos/1032110/pexels-photo-1032110.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          id: 3,
          linkUrl: 'store/sneakers'
        },
        {
          title: 'suits',
          imageUrl: 'https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?cs=srgb&dl=pexels-pixabay-325876.jpg&fm=jpg',
          size: 'large',
          id: 4,
          linkUrl: 'store/suits'
        },
        {
          title: 'womens',
          imageUrl: 'https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          size: 'medium',
          id: 5,
          linkUrl: 'store/women'
        },
        {
          title: 'mens',
          imageUrl: 'https://images.pexels.com/photos/1049317/pexels-photo-1049317.jpeg?cs=srgb&dl=pexels-helena-lopes-1049317.jpg&fm=jpg',
          size: 'medium',
          id: 6,
          linkUrl: 'store/men'
        },
        {
          title: 'store all',
          imageUrl: 'https://images.pexels.com/photos/7148404/pexels-photo-7148404.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          size: 'medium',
          id: 7,
          linkUrl: 'store/all'
        },
      ]
}

const reducer = (state = INITIAL_STATE, action) => {
    switch(action) {
        default: return state;
    }
}

export default reducer;