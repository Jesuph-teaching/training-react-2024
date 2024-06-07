import  { Component } from 'react'
import { format } from "date-fns";
export default class DateFormatter extends Component {
  render() {
    return (
      <div>
        {
          format(new Date(), "yyyy-MM-dd")
        }
      </div>
    )
  }
}

