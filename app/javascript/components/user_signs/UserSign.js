import React from "react"
import PropTypes from "prop-types"

class UserSign extends React.Component {
  render () {
    return (
      <tr>
        <td data-label='osName'> {this.props.os_name} </td>
        <td data-label='roleName'> {this.props.role_name} </td>
        <td data-label='roleId'> {this.props.role_id} </td>
        <td data-label='sign'> {this.props.sign} </td>
      </tr>
    );
  }
}

UserSign.propTypes = {
  os_name: PropTypes.string,
  role_name: PropTypes.string,
  role_id: PropTypes.string,
  sign: PropTypes.string
};
export default UserSign
