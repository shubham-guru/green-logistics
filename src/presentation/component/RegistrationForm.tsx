import React from "react";
import { Button, Col, Form, Input, Select } from "antd";
import { LoadingOutlined } from "@ant-design/icons"
import Alert from "./Alert";
import "../../css/registrationForm.css";

const RegistrationForm: React.FC = () => {
  const [submittable, setSubmittable] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(false);

  const [form] = Form.useForm();
  const [formData, setFormData] = React.useState({
    fullname: "",
    package_name: "",
    designation: "",
    company_name: "",
    email: "",
    mobile: "",
  });

  React.useEffect(() => {
    form.validateFields({ validateOnly: true }).then(
      () => {
        setSubmittable(true);
      },
      () => {
        setSubmittable(false);
      }
    );
  }, [formData]);

  const handleSubmit = async () => {
    const { fullname, package_name, designation, company_name, email, mobile } =
      formData;
    setLoading(true);

    const res = await fetch(
      "https://greenlogistics-a9595-default-rtdb.firebaseio.com/registrationLandingPageForm.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullname,
          package_name,
          designation,
          company_name,
          email,
          mobile,
        }),
      }
    );
    if (res) {
      Alert.fire({
        icon: "success",
        title: "Successfully submitted",
      });
      setLoading(false);
    } else {
      Alert.fire({
        icon: "error",
        title: "Something went wrong, please try again !",
      });
    }
  };

  return (
    <Col className="form-col" xs={24} lg={9}>
      <Form
        form={form}
        name="validateOnly"
        layout="vertical"
        autoComplete="off"
      >
        <Form.Item name="name" rules={[{ required: true }]}>
          <Input
            placeholder="Fullname"
            onChange={(e) =>
              setFormData({ ...formData, fullname: e.target.value })
            }
            className="input-field"
          />
        </Form.Item>

        <Form.Item>
          <Select
            placeholder="Select a Package"
            className="input-field"
            onChange={(e) => setFormData({ ...formData, package_name: e })}
          >
            <Select.Option value="DELEGATE FEES">Delegate Fees</Select.Option>
            <Select.Option value="EARLY BIRD">Early Bird</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item name="designation" rules={[{ required: true }]}>
          <Input
            placeholder="Designation"
            onChange={(e) =>
              setFormData({ ...formData, designation: e.target.value })
            }
            className="input-field"
          />
        </Form.Item>

        <Form.Item name="company_name" rules={[{ required: true }]}>
          <Input
            placeholder="Company Name"
            onChange={(e) =>
              setFormData({ ...formData, company_name: e.target.value })
            }
            className="input-field"
          />
        </Form.Item>

        <Form.Item name="email" rules={[{ required: true }]}>
          <Input
            placeholder="Email"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="input-field"
          />
        </Form.Item>

        <Form.Item name="mobile" rules={[{ required: true }]}>
          <Input
            placeholder="Mobile"
            onChange={(e) =>
              setFormData({ ...formData, mobile: e.target.value })
            }
            className="input-field"
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            icon={loading ? <LoadingOutlined /> : null}
            className="submit-btn"
            onClick={handleSubmit}
            htmlType="submit"
            disabled={!submittable}
          >
            Register Now
          </Button>
        </Form.Item>
      </Form>
    </Col>
  );
};

export default RegistrationForm;
