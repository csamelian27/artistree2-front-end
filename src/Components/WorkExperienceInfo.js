import React from 'react'
import { Grid, Card, Segment, Label, Table, Header, Rating } from 'semantic-ui-react'

class WorkExperienceInfo extends React.Component {

  render() {
    console.log(this.props);
    console.log(this.state);
    const { business_name, contact_person, contact_number, months_range, description } = this.props.workExp
    return(
      <Table.Row>
        <Table.Cell singleLine>{business_name}</Table.Cell>
        <Table.Cell singleLine>{contact_person}</Table.Cell>
        <Table.Cell singleLine>{contact_number}</Table.Cell>
        <Table.Cell singleLine>{months_range}</Table.Cell>
        <Table.Cell singleLine>{description}</Table.Cell>
      </Table.Row>
    )
  }
}

export default WorkExperienceInfo
