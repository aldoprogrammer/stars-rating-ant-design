import React from 'react';
import './App.css';
import { Rate, Space } from 'antd';
import { FrownOutlined, MehOutlined, SmileOutlined } from "@ant-design/icons/lib/icons";

const smilesRating = [
  <FrownOutlined />,
  <MehOutlined />,
  <SmileOutlined />
]

function App() {

  return (
    <div className="App" style={{ marginTop: '80px'}}>
    <h2>Disini kita bkin sistem rate</h2>
    <Space direction='vertical'>
      <p>bintang biasa</p>
      <Rate />
      <p>Default nya 3 sih</p>
      <Rate defaultValue={3} />
      <p>Pake keterangan perbintang</p>
      <Rate defaultValue={3} tooltips={["Bad", "Not Really Good", "Good", "Comfort", "Best Driver!"]}/>
      <p>boleh kasih setengah</p>
      <Rate defaultValue={3} allowHalf />
      <p>ga bisa dihapus semua, mnmal satu bintang</p>
      <Rate defaultValue={3} allowClear={false} />
      <p>bintang warna hitam</p>
      <Rate style={{color: "black"}} />
      <p>Kalo ini index nomor nya</p>
      <Rate defaultValue={2}
       style={{ color: "black"}}
       character={({ index }) => {
        return smilesRating[index];
      }}
      onChange={(value) => {
        console.log("You rated as ", value, "stars")
      }}
      />
   </Space>
   </div>
   
  );
};
export default App;