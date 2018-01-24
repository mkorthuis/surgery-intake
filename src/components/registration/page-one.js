import React, {
  Component
} from 'react'
import {
  connect
} from 'react-redux'
import {
  Panel,
  Grid,
  Row,
  Col,
  Button
} from 'react-bootstrap'

class PageOne extends Component {

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.goToPage(2);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Grid>
          <Panel>
            <Panel.Heading>Overview</Panel.Heading>
            <Panel.Body>
              <p>Sed varius metus non tellus dapibus accumsan. Pellentesque tincidunt elementum odio, a sodales nunc bibendum ac. Nam sagittis porta molestie. Vestibulum in auctor neque. Fusce pulvinar placerat nulla eu fermentum. Proin facilisis, ipsum eu tincidunt ultrices, lorem turpis fermentum nunc, ut rhoncus enim ex vel neque. In ac arcu ac lorem cursus hendrerit non quis elit. Curabitur vel urna in turpis tincidunt hendrerit. Vivamus ac eros eu neque iaculis faucibus. Praesent sed vulputate felis, nec posuere ex. Sed fringilla posuere magna. Integer fringilla iaculis odio, in ultrices leo commodo imperdiet. Fusce tristique risus a mauris eleifend sodales. Morbi faucibus aliquet nibh, non fermentum orci aliquet nec.</p>
              <p>Curabitur venenatis eget purus sit amet vehicula. Morbi ac nunc vel magna porta imperdiet vitae non augue. Donec posuere diam quis est ornare, placerat ullamcorper magna placerat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras purus purus, vulputate sit amet ultricies auctor, tristique ut orci. Maecenas in ipsum id quam ullamcorper lobortis. Nunc a dolor sit amet metus fringilla congue non sit amet ante. Vestibulum leo mauris, porta ac turpis et, iaculis euismod urna. Duis consectetur massa at mi dignissim lacinia. Nunc commodo viverra dapibus. Pellentesque at enim eu nibh aliquam placerat. In ultrices, velit ut porttitor tincidunt, elit nibh elementum leo, eu aliquam tortor ipsum ut nibh.</p>
              <p>Curabitur id ultricies lectus. Morbi eros velit, venenatis id enim in, venenatis ultrices ante. In hac habitasse platea dictumst. Donec aliquam semper ligula quis maximus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque in tincidunt sapien. In quis tellus vel elit pretium aliquet. Cras tristique imperdiet lacus eu ullamcorper. Donec quis viverra erat. Vestibulum lobortis ipsum eu erat sagittis, id aliquet nibh molestie. Fusce convallis, nunc sit amet vestibulum tincidunt, nulla leo ornare nulla, vitae commodo ante nisi vel dui. Curabitur sagittis fermentum orci in viverra. Donec consectetur aliquet diam ut dignissim. Integer vitae felis quis nulla varius aliquam quis posuere quam. Nam quam dui, ultrices ut interdum id, tincidunt eget justo.</p>
              <p>In the pages that follow you will be asked questions regarding your medical history which will help your surgeon and the care team to better serve you. Please answer all questions to the best of your ability.</p>
            </Panel.Body>
          </Panel>
          <Row>
            <Col xs={12}>
              <Button bsStyle="primary" type="submit">
                Save and continue
              </Button>
            </Col>
          </Row>
        </Grid>
      </form>
    )
  }
}

export default connect(
  (state) => ({

  }), {

  }
)(PageOne)