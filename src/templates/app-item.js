import { element } from 'deku'
export default {
  render: ({props}) => <div class="app item">
  <h4>{props.app.name}</h4>
  <p>{props.app.description}</p>
  <button onClick={props.onClick}>Launch</button>
</div>
}