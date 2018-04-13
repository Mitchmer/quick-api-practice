import React from 'react'
import axios from 'axios'
import CharacterView from './CharacterView'
import { Card, Grid, Header } from 'semantic-ui-react'


class Characters extends React.Component {
  state = { characters: [], charactersPath: [] }

  componentDidMount() {
    axios.get('https://api.got.show/api/characters/')
      .then( res => {
        debugger
        this.setState({ characters: res.data })
      })
  }
  
  render() {
    const { characters } = this.state
    return (
        <Grid>
          {
            characters.map( c => {
              return (
                <div>
                {c.books &&
                <Card key={c._id}>
                  <Card.Header>
                    <Header as="h2">
                      {c.titles[0]} {c.name}
                      {
                        c.house &&
                          <h2>of </h2>

                      }
                       of {c.house}
                    </Header>
                  </Card.Header>
                  <Card.Content>
                    <Header as="h4">
                      Appears In: 
                    </Header>
                      {
                        c.books.map( book => {
                          return (
                            <div>
                              {book}, 
                            </div>
                          )
                        })
                      }
                  </Card.Content>
                </Card>
                }
                </div>
              )
            })
          } 
        </Grid>
    )
  }
}

export default Characters