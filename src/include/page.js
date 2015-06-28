import { element } from 'deku'

export let Page = {
  name: 'Page',
  render(component, setState) {
    let {state, props} = component
    return <div class="page">
      {props.children}
     </div>
  }
}

export let Row = {
  name: 'Row',
  render(component, setState) {
    let {state, props} = component
    return <div class="row middle-xs">
      <div class="col-xs-2 center-xs">
        <span class="num">{props.n}</span>
      </div>
      <div class="col-xs-10 middle-xs">
        <h2>{props.text}</h2>
      </div>
      <div class="col-xs-offset-2 col-xs-10 middle-xs">
        {props.children}
      </div>
    </div>
  }
}
