import React from "react";
import "./App.css";
import SimpleJsx from "./lessons/lesson0010/simplejsx";
import SimpleJsxComponents from "./lessons/lesson0020/simplejsx-component";
import SimpleJsxProps from "./lessons/lesson0030/simplejsx-props";
import SimpleJsxDataProps from "./lessons/lesson0040/simplejsx-props";
import SimpleJsxDataChildrenProps from "./lessons/lesson0050/simplejsx-children-prop";
import ComponentEvent from "./lessons/lesson0060/componentevent";
import ComponentTwoWayBinding from "./lessons/lesson0070/comptwowaybinding";
import ComponentConditionalContent from "./lessons/lesson0080/compconddisp";
import ComponentConditionalStyling from "./lessons/lesson0090/compcondstyle";
import ComponentForLoop from "./lessons/lesson0100/compcondloop";
import CompLiftingState from "./lessons/lesson0110/compliftState";
import ChoreApp from "./lessons/lesson0200/choreapp";
import HOCContainer from "./lessons/lesson0130/HOCComponent";
import RouterApp from "./lessons/lesson0140/RouterApp";
import HOCApp from "./lessons/lesson0300/HOCApp";
import FormDropdown from "./lessons/lesson0210/formcheckbox";
import FormMultiple from "./lessons/lesson0211/formmultiple";
import UncontrolledForm from "./lessons/lesson0212/UncontrolledForm";
import ConditionalStyledComponent from "./lessons/lesson0209/styledcomponents";
import FormDataForm from "./lessons/lesson0213/formdata";
import ReactHookFormApp from "./lessons/lesson0214/reacthookform";
import ReactHookFormValidationApp from "./lessons/lesson0215/reacthookformvalidation";
import ReactHookFormInitializeApp from "./lessons/lesson0216/reacthookformvalidation";
import ReactRouterApp from "./lessons/lesson0220/reactrouterapp";
import CounterHookApp from "./lessons/lesson0219/counterHook";
import ChildrenWithBorder from "./lessons/lesson0120/childrenWithBorder";
import ChildrenProps from "./lessons/lesson0120/childrenprops";
import CounterOne from "./lessons/lesson0219/counter1";
import CounterTwo from "./lessons/lesson0219/counter2";
import UserForm from "./lessons/lesson0219/userform";
import ContextApp from "./lessons/lesson0320/contextApp";
import CollapseParaTest from "./lessons/lesson0121/CollapseParaTest";
import UseEffectApp from "./lessons/lesson0217/useeffect";
import ContextAppOne from "./lessons/lesson0310/ContextApp";
import ReactRouterPaths from "./lessons/lesson0221/reactrouterpaths";
import ReducerCounter from "./lessons/lesson0217/usereducer";
/*
function App() {
  return (
    <div className="App">
      <ChildrenWithBorder>
        <p>This is a paragraph within a Div with a Border</p>
        <p>This is another paragraph within the Div</p>
      </ChildrenWithBorder>
    </div>
  );
  */

function App() {
  return (
    <div className="App">
      <ContextAppOne />
    </div>
  );
}

export default App;
