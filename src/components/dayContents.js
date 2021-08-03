import React from "react";
import { Table, Form, Checkbox } from "antd";
import {
  sortableContainer,
  sortableElement,
  sortableHandle,
} from "react-sortable-hoc";
import { MenuOutlined } from "@ant-design/icons";
import arrayMove from "array-move";
import "../css/daycontents.css";
const DragHandle = sortableHandle(() => (
  <MenuOutlined style={{ cursor: "grab", color: "#999" }} />
));
const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};
const columns = [
  {
    title: "Sort",
    dataIndex: "sort",
    width: 30,
    className: "drag-visible",
    render: () => <DragHandle />,
  },
  {
    title: "캐릭터",
    dataIndex: "name",
    className: "drag-visible",
  },
  {
    title: "휴식보너스",
    children: [
      {
        title: <img src="https://blog.kakaocdn.net/dn/d0i9mI/btq6BDEX72e/kjvbksDSZT9uSKMtD0awkk/img.gif" width="20px"></img>,
        dataIndex: "test",
        key: "test",
        
      },
      {
        title: <img src="https://blog.kakaocdn.net/dn/d0i9mI/btq6BDEX72e/kjvbksDSZT9uSKMtD0awkk/img.gif" width="20px"></img>,
        dataIndex: "test",
        key: "test",
        
      },
      {
        title: <img src="https://blog.kakaocdn.net/dn/d0i9mI/btq6BDEX72e/kjvbksDSZT9uSKMtD0awkk/img.gif" width="20px"></img>,
        dataIndex: "test",
        key: "test",
        
      },
    ],
    dataIndex: "age",
  },
  {
    title: "화요일",
    children: [
      {
        title: <img src="https://blog.kakaocdn.net/dn/d0i9mI/btq6BDEX72e/kjvbksDSZT9uSKMtD0awkk/img.gif" width="20px"></img>,
        dataIndex: "test",
        key: "test",
        render: (test) => (
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{ offset: 8, span: 16 }}
              >
                <Checkbox></Checkbox>
              </Form.Item>
            </Form>
          ),
      },
      {
        title: <img src="https://blog.kakaocdn.net/dn/bxihHm/btq6BDLM2vG/b4ldKqc8VwWZUTIKjwyPL0/img.png" width="20px"></img>,
        dataIndex: "test",
        key: "test",
        render: (test) => (
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{ offset: 8, span: 16 }}
              >
                <Checkbox></Checkbox>
              </Form.Item>
            </Form>
          ),
      },
      {
        title: <img src="https://blog.kakaocdn.net/dn/PQSab/btq6AQrfeZf/bQKs6W4GSFChGVjurB6K4k/img.png" width="20px"></img>,
        dataIndex: "test",
        key: "test",
        render: (test) => (
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{ offset: 8, span: 16 }}
              >
                <Checkbox></Checkbox>
              </Form.Item>
            </Form>
          ),
      },
    ],
    dataIndex: "address",
  },
  {
    title: "화요일",
    children: [
      {
        title: <img src="https://blog.kakaocdn.net/dn/d0i9mI/btq6BDEX72e/kjvbksDSZT9uSKMtD0awkk/img.gif" width="20px"></img>,
        dataIndex: "test",
        key: "test",
        render: (test) => (
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{ offset: 8, span: 16 }}
              >
                <Checkbox></Checkbox>
              </Form.Item>
            </Form>
          ),
      },
      {
        title: <img src="https://blog.kakaocdn.net/dn/bxihHm/btq6BDLM2vG/b4ldKqc8VwWZUTIKjwyPL0/img.png" width="20px"></img>,
        dataIndex: "test",
        key: "test",
        render: (test) => (
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{ offset: 8, span: 16 }}
              >
                <Checkbox></Checkbox>
              </Form.Item>
            </Form>
          ),
      },
      {
        title: <img src="https://blog.kakaocdn.net/dn/PQSab/btq6AQrfeZf/bQKs6W4GSFChGVjurB6K4k/img.png" width="20px"></img>,
        dataIndex: "test",
        key: "test",
        render: (test) => (
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{ offset: 8, span: 16 }}
              >
                <Checkbox></Checkbox>
              </Form.Item>
            </Form>
          ),
      },
    ],
    dataIndex: "address",
  },
  {
    title: "화요일",
    children: [
      {
        title: <img src="https://blog.kakaocdn.net/dn/d0i9mI/btq6BDEX72e/kjvbksDSZT9uSKMtD0awkk/img.gif" width="20px"></img>,
        dataIndex: "test",
        key: "test",
        render: (test) => (
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{ offset: 8, span: 16 }}
              >
                <Checkbox></Checkbox>
              </Form.Item>
            </Form>
          ),
      },
      {
        title: <img src="https://blog.kakaocdn.net/dn/bxihHm/btq6BDLM2vG/b4ldKqc8VwWZUTIKjwyPL0/img.png" width="20px"></img>,
        dataIndex: "test",
        key: "test",
        render: (test) => (
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{ offset: 8, span: 16 }}
              >
                <Checkbox></Checkbox>
              </Form.Item>
            </Form>
          ),
      },
      {
        title: <img src="https://blog.kakaocdn.net/dn/PQSab/btq6AQrfeZf/bQKs6W4GSFChGVjurB6K4k/img.png" width="20px"></img>,
        dataIndex: "test",
        key: "test",
        render: (test) => (
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{ offset: 8, span: 16 }}
              >
                <Checkbox></Checkbox>
              </Form.Item>
            </Form>
          ),
      },
    ],
    dataIndex: "address",
  },
  {
    title: "화요일",
    children: [
      {
        title: <img src="https://blog.kakaocdn.net/dn/d0i9mI/btq6BDEX72e/kjvbksDSZT9uSKMtD0awkk/img.gif" width="20px"></img>,
        dataIndex: "test",
        key: "test",
        render: (test) => (
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{ offset: 8, span: 16 }}
              >
                <Checkbox></Checkbox>
              </Form.Item>
            </Form>
          ),
      },
      {
        title: <img src="https://blog.kakaocdn.net/dn/bxihHm/btq6BDLM2vG/b4ldKqc8VwWZUTIKjwyPL0/img.png" width="20px"></img>,
        dataIndex: "test",
        key: "test",
        render: (test) => (
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{ offset: 8, span: 16 }}
              >
                <Checkbox></Checkbox>
              </Form.Item>
            </Form>
          ),
      },
      {
        title: <img src="https://blog.kakaocdn.net/dn/PQSab/btq6AQrfeZf/bQKs6W4GSFChGVjurB6K4k/img.png" width="20px"></img>,
        dataIndex: "test",
        key: "test",
        render: (test) => (
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{ offset: 8, span: 16 }}
              >
                <Checkbox></Checkbox>
              </Form.Item>
            </Form>
          ),
      },
    ],
    dataIndex: "address",
  },
  {
    title: "화요일",
    children: [
      {
        title: <img src="https://blog.kakaocdn.net/dn/d0i9mI/btq6BDEX72e/kjvbksDSZT9uSKMtD0awkk/img.gif" width="20px"></img>,
        dataIndex: "test",
        key: "test",
        render: (test) => (
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{ offset: 8, span: 16 }}
              >
                <Checkbox></Checkbox>
              </Form.Item>
            </Form>
          ),
      },
      {
        title: <img src="https://blog.kakaocdn.net/dn/bxihHm/btq6BDLM2vG/b4ldKqc8VwWZUTIKjwyPL0/img.png" width="20px"></img>,
        dataIndex: "test",
        key: "test",
        render: (test) => (
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{ offset: 8, span: 16 }}
              >
                <Checkbox></Checkbox>
              </Form.Item>
            </Form>
          ),
      },
      {
        title: <img src="https://blog.kakaocdn.net/dn/PQSab/btq6AQrfeZf/bQKs6W4GSFChGVjurB6K4k/img.png" width="20px"></img>,
        dataIndex: "test",
        key: "test",
        render: (test) => (
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{ offset: 8, span: 16 }}
              >
                <Checkbox></Checkbox>
              </Form.Item>
            </Form>
          ),
      },
    ],
    dataIndex: "address",
  },
  {
    title: "화요일",
    children: [
      {
        title: <img src="https://blog.kakaocdn.net/dn/d0i9mI/btq6BDEX72e/kjvbksDSZT9uSKMtD0awkk/img.gif" width="20px"></img>,
        dataIndex: "test",
        key: "test",
        render: (test) => (
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{ offset: 8, span: 16 }}
              >
                <Checkbox></Checkbox>
              </Form.Item>
            </Form>
          ),
      },
      {
        title: <img src="https://blog.kakaocdn.net/dn/bxihHm/btq6BDLM2vG/b4ldKqc8VwWZUTIKjwyPL0/img.png" width="20px"></img>,
        dataIndex: "test",
        key: "test",
        render: (test) => (
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{ offset: 8, span: 16 }}
              >
                <Checkbox></Checkbox>
              </Form.Item>
            </Form>
          ),
      },
      {
        title: <img src="https://blog.kakaocdn.net/dn/PQSab/btq6AQrfeZf/bQKs6W4GSFChGVjurB6K4k/img.png" width="20px"></img>,
        dataIndex: "test",
        key: "test",
        render: (test) => (
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{ offset: 8, span: 16 }}
              >
                <Checkbox></Checkbox>
              </Form.Item>
            </Form>
          ),
      },
    ],
    dataIndex: "address",
  },
  {
    title: "화요일",
    children: [
      {
        title: <img src="https://blog.kakaocdn.net/dn/d0i9mI/btq6BDEX72e/kjvbksDSZT9uSKMtD0awkk/img.gif" width="20px"></img>,
        dataIndex: "test",
        key: "test",
        render: (test) => (
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{ offset: 8, span: 16 }}
              >
                <Checkbox></Checkbox>
              </Form.Item>
            </Form>
          ),
      },
      {
        title: <img src="https://blog.kakaocdn.net/dn/bxihHm/btq6BDLM2vG/b4ldKqc8VwWZUTIKjwyPL0/img.png" width="20px"></img>,
        dataIndex: "test",
        key: "test",
        render: (test) => (
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{ offset: 8, span: 16 }}
              >
                <Checkbox></Checkbox>
              </Form.Item>
            </Form>
          ),
      },
      {
        title: <img src="https://blog.kakaocdn.net/dn/PQSab/btq6AQrfeZf/bQKs6W4GSFChGVjurB6K4k/img.png" width="20px"></img>,
        dataIndex: "test",
        key: "test",
        render: (test) => (
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{ offset: 8, span: 16 }}
              >
                <Checkbox></Checkbox>
              </Form.Item>
            </Form>
          ),
      },
    ],
    dataIndex: "address",
  },
];

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    index: 0,
    test: "0",
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    index: 1,
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    index: 2,
  },
  

];

const SortableItem = sortableElement((props) => <tr {...props} />);
const SortableContainer = sortableContainer((props) => <tbody {...props} />);

class Daycontents extends React.Component {
  state = {
    dataSource: data,
  };

  onSortEnd = ({ oldIndex, newIndex }) => {
    const { dataSource } = this.state;
    if (oldIndex !== newIndex) {
      const newData = arrayMove(
        [].concat(dataSource),
        oldIndex,
        newIndex
      ).filter((el) => !!el);
      console.log("Sorted items: ", newData);
      this.setState({ dataSource: newData });
    }
  };

  DraggableContainer = (props) => (
    <SortableContainer
      useDragHandle
      disableAutoscroll
      helperClass="row-dragging"
      onSortEnd={this.onSortEnd}
      {...props}
    />
  );

  DraggableBodyRow = ({ className, style, ...restProps }) => {
    const { dataSource } = this.state;
    // function findIndex base on Table rowKey props and should always be a right array index
    const index = dataSource.findIndex(
      (x) => x.index === restProps["data-row-key"]
    );
    return <SortableItem index={index} {...restProps} />;
  };
  render() {
    const { dataSource } = this.state;

    return (
      <Table
        pagination={false}
        dataSource={dataSource}
        columns={columns}
        bordered
        rowKey="index"
        components={{
          body: {
            wrapper: this.DraggableContainer,
            row: this.DraggableBodyRow,
          },
        }}
      />
    );
  }
}

export default Daycontents;
