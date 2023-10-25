import { gql } from '@apollo/client'


export const All_SHIPS = gql`
query AllShips {
  vehicles {
        title
        description
      icons {
        large
        medium
        }
    level
    type {
      name
    }
    nation {
      name
      title
      color
      icons {
        small
        medium
        large
      }
    }
    
    }
  
  }

`