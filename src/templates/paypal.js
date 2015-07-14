import { element } from 'deku'
export default {
  render: ({props}) => <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
  <input type="hidden" name="cmd" value="_s-xclick" />
  <input type="hidden" name="hosted_button_id" value="GD4XYHKQWA9UE" />
  <table>
  <tr><td><input type="hidden" name="on0" value="Subscription Length" />Subscription Length</td></tr><tr><td><select name="os0">
    <option value="30-day Trial">30-day Trial $0.00 USD</option>
    <option value="3-month">3-month $10.00 USD</option>
    <option value="6-month">6-month $15.00 USD</option>
    <option value="1 Year">1 Year $25.00 USD</option>
  </select> </td></tr>
  </table>
  <input type="hidden" name="currency_code" value="USD" />
  <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
  <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
</form>
}
