import {Component} from 'react'

import {
  BgContainer,
  CardContainer,
  Heading,
  EditableInputContainer,
  Paragraph,
  UserInput,
  Button,
} from './styledComponent'

class AppItem extends Component {
  state = {
    isButtonClick: false,
    inputValue: '',
  }

  onChangeInputText = event => {
    this.setState({inputValue: event.target.value})
  }

  onClickButton = () => {
    this.setState(prevState => ({isButtonClick: !prevState.isButtonClick}))
  }

  render() {
    const {isButtonClick, inputValue} = this.state
    const onChangeButton = isButtonClick ? 'Edit' : 'Save'
    return (
      <BgContainer>
        <CardContainer>
          <Heading>Editable Text Input</Heading>
          <EditableInputContainer>
            {isButtonClick ? (
              <Paragraph>{inputValue}</Paragraph>
            ) : (
              <UserInput
                type="text"
                value={inputValue}
                onChange={this.onChangeInputText}
              />
            )}
            <Button type="button" onClick={this.onClickButton}>
              {onChangeButton}
            </Button>
          </EditableInputContainer>
        </CardContainer>
      </BgContainer>
    )
  }
}

export default AppItem
