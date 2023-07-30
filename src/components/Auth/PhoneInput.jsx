import React from "react";
import { Tooltip, Input, Form } from "antd";

const PhoneInput = (props) => {
  const { value, onChange } = props;
  const handleChange = (e) => {
    const { value: inputValue } = e.target;
    const reg = /^\d*$/;
    if (reg.test(inputValue)) {
      onChange(inputValue);
    }
  };

  const handleBlur = () => {
    let valueTemp = value;
    if (value.charAt(value.length - 1) === "." || value === "-") {
      valueTemp = value.slice(0, -1);
    }
    onChange(valueTemp.replace(/0*(\d+)/, "$1"));
  };

  return (
    <Form.Item
      rules={[
        {
          required: true,
          type: "text",
          message: "Please enter your phone number ",
        },
      ]}
      name={"phone"}
      className="auth-form-item"
      style={{
        width: "65%",
        marginBottom: "4%",
      }}
      label="Phone Number"
    >
      <Tooltip trigger={["focus"]} placement="topLeft">
        <Input
          {...props}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Phone Number e.g:09..."
          maxLength={11}
        />
      </Tooltip>
    </Form.Item>
  );
};

export default PhoneInput;
