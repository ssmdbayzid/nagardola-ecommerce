import { Table } from 'antd'
import React from 'react'

const specification = {
  description: "I like to be real. I don't like things to be staged or fussy. Grunge is a hippied romantic version of punk. I have my favourite fashion decade, yes, yes, yes: '60s. It was a sort of little revolution; the clothes were amazing but not too exaggerated. Fashions fade, style is eternal. A girl should be two things: classy and fabulous.",
  productDimensions: "15 x 15 x 3 cm; 250 Grams",
  dateFirstAvailable: 	"5 April 2021",
  manufacturer : "Aditya Birla Fashion and Retail Limited",
  asin	 : "B06Y28LCDN",
  itemModelNumber : "AMKP317G04244",
  department: "Men",
  itemWeight: "250 G",
  itemDimensions: "15 x 15 x 3 Centimeters",
  netQuantity	 : "1 U",
  includedComponents : "1-T-shirt",
  genericName : "T-shirt"
}

export default function SpecificationTab() {

  const columns = [
    {
      title: 'Product Particular', 
      dataIndex: 'product_particular',
      key: 'product_particular'
    },
    {
      title: 'Product Details', 
      dataIndex: 'product_details',
      key: 'product_details'
    },
  ]

  return (
    <div>
      <p className='text_para'>{specification.description}</p>
      <table>
        <tr>
          <td>Product Dimensions : </td>
          <td>{specification.productDimensions}</td>
        </tr>
        <tr>
          <td>ateFirstAvailable : </td>
          <td>{specification.productDimensions}</td>
        </tr>
      </table>
    </div>
  )
}
