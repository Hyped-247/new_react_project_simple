import {Component} from "react";
import Header from "./Header";
import Action from "./Action";
import Options from "./Options";
import AddOption from "./AddOption";
import React from "react";
import OptionModel from "./OptionModal"

export default class IndecisionApp extends Component {

    state = {options: []};
    selectedOption = undefined;

     handleDeleteOptions = () => {
      this.setState(() => ({ options: []}));
     };

      handleAddOption = (option) => {
          if (!option){
              return 'Enter a valid value'
          }
          else if (this.state.options.indexOf(option) > 1){
            return 'This option already exists.'
          }
          this.setState((preState) => ({ options: preState.options.concat(option)}));
      };

      handleClearSelectedOption = () => {
        this.setState(() => ({selectedOption: undefined}));
      };

      handleDeleteOption = (optionToRemove) => {
          console.log(optionToRemove);
          this.setState((preState) => (
              { options: preState.options.filter((option) => (optionToRemove !== option))}
          ));
      };


      handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => ({selectedOption: option}))
      };

      componentDidMount() {
          try {
              const json = localStorage.getItem('options');
              const options = JSON.parse(json);
              if (options){this.setState(() => ({options: options}))}
          } catch (e) {
              // do nothing if the JSON is not valid.
          }
      };

       componentDidUpdate(preProps, preState) {
          if (preState.options.length !== this.state.options.length){
              const json = JSON.stringify(this.state.options);
              localStorage.setItem('options', json);
          }
      };

      componentWillMount = () => {
          console.log('componentWillMount');
      };

      render() {
        const title = 'Indecision Application';
        const subtitle = '';
        return (
          <div>
            <Header title={title} subtitle={subtitle} />
              <div className="container" >
                  <Action hasOptions={this.state.options > 0}
                          handlePick={this.handlePick} />
                  <div className="widget">
                   <Options options={this.state.options}
                        handleDeleteOptions={this.handleDeleteOptions}
                        handleDeleteOption={this.handleDeleteOption} />
                    <AddOption handleAddOption={this.handleAddOption} />
                  </div>
              </div>

            <OptionModel selectedOption={this.state.selectedOption}
                handleClearSelectedOption={this.handleClearSelectedOption}/>
          </div>
        );
  }
}