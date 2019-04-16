import React from 'react'
import { Grid, Image, Table } from 'semantic-ui-react'

const CollabPostCard = (props) => {
  return(
    <Table.Row>
      <Table.Cell>{props.post.title}</Table.Cell>
      <Table.Cell>{props.post.seeking}</Table.Cell>
      <Table.Cell>
        {props.post.description}
      </Table.Cell>
    </Table.Row>
  )
}

export default CollabPostCard
