"use client"

import Image from 'next/image'
import {Container, Row} from 'react-bootstrap';

function ProductTableData() {
  return (
    <div className='product-table-data-area space-pt--100 space-pb--r70'>
      <Container>
        <Row>
          <div className='product-table-data-area-info'>
            <span>Our Brands</span>
            <h3>Difference Between Our Product Lines</h3>
            <p>A lot of people around the world use CBD products to get relief from their symptoms. <br></br>Our
              products are certified, we care about quality and we are extremely proud of our laboratory.</p>
          </div>
          <div className='product-table-data'>
            <div style={{overflowX: 'auto'}} className='product-table-data__table'>
              <table>
                <thead>
                <tr>
                  <th className='first-column-header'>Featurus</th>
                  <th>Sauce Terps</th>
                  <th>Medical Terpenes</th>
                  <th>live resin</th>
                  <th>ultra candy</th>
                  <th>Viscosity</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td className='tdTitle'>Botanical terpenes</td>
                  <td>
                    <Image src='/assets/images/productTableData/CheckTable.svg' alt='Check' width={30} height={30}/>
                  </td>
                  <td>
                    <Image src='/assets/images/productTableData/CheckTable.svg' alt='Check' width={30} height={30}/>
                  </td>
                  <td>
                    {/* <Image width={100} height={100} src='/assets/images/productTableData/crossTable.svg' alt='Cross' /> */}
                  </td>
                  <td>
                    <Image src='/assets/images/productTableData/CheckTable.svg' alt='Check' width={30} height={30}/>
                  </td>
                  <td>
                    <Image src='/assets/images/productTableData/CheckTable.svg' alt='Check' width={30} height={30}/>
                  </td>
                </tr>
                <tr>
                  <td className='tdTitle'>Food Grade</td>
                  <td>
                    <Image src='/assets/images/productTableData/CheckTable.svg' alt='Check' width={30} height={30}/>
                  </td>
                  <td>
                    <Image src='/assets/images/productTableData/CheckTable.svg' alt='Check' width={30} height={30}/>
                  </td>
                  <td>
                    <Image src='/assets/images/productTableData/CheckTable.svg' alt='Check' width={30} height={30}/>
                  </td>
                  <td>
                    <Image src='/assets/images/productTableData/CheckTable.svg' alt='Check' width={30} height={30}/>
                  </td>
                  <td>
                    <Image src='/assets/images/productTableData/CheckTable.svg' alt='Check' width={30} height={30}/>
                  </td>
                </tr>
                <tr>
                  <td className='tdTitle'>california compliant</td>
                  <td>
                    <Image src='/assets/images/productTableData/CheckTable.svg' alt='Check' width={30} height={30}/>
                  </td>
                  <td>
                    <Image src='/assets/images/productTableData/CheckTable.svg' alt='Check' width={30} height={30}/>
                  </td>
                  <td>
                    <Image src='/assets/images/productTableData/CheckTable.svg' alt='Check' width={30} height={30}/>
                  </td>
                  <td>
                    {/* <Image width={100} height={100} src='/assets/images/productTableData/crossTable.svg' alt='Cross' /> */}
                  </td>
                  <td>
                    <Image src='/assets/images/productTableData/CheckTable.svg' alt='Check' width={30} height={30}/>
                  </td>
                </tr>
                <tr>
                  <td className='tdTitle'>smell like weed</td>
                  <td>
                    {/* <Image width={100} height={100} src='/assets/images/productTableData/crossTable.svg' alt='Cross' /> */}
                  </td>
                  <td>
                    <Image src='/assets/images/productTableData/CheckTable.svg' alt='Check' width={30} height={30}/>
                  </td>
                  <td>
                    <Image src='/assets/images/productTableData/CheckTable.svg' alt='Check' width={30} height={30}/>
                  </td>
                  <td>
                    {/* <Image width={100} height={100} src='/assets/images/productTableData/crossTable.svg' alt='Cross' /> */}
                  </td>
                  <td>
                    {/* <Image width={100} height={100} src='/assets/images/productTableData/crossTable.svg' alt='Cross' /> */}
                  </td>
                </tr>
                <tr>
                  <td className='tdTitle'>customizable</td>
                  <td>
                    <Image src='/assets/images/productTableData/CheckTable.svg' alt='Check' width={30} height={30}/>
                  </td>
                  <td>
                    <Image src='/assets/images/productTableData/CheckTable.svg' alt='Check' width={30} height={30}/>
                  </td>
                  <td>
                    {/* <Image width={100} height={100} src='/assets/images/productTableData/crossTable.svg' alt='Cross' /> */}
                  </td>
                  <td>
                    {/* <Image width={100} height={100} src='/assets/images/productTableData/crossTable.svg' alt='Cross' /> */}
                  </td>
                  <td>
                    {/* <Image width={100} height={100} src='/assets/images/productTableData/crossTable.svg' alt='Cross' /> */}
                  </td>
                </tr>
                <tr>
                  <td className='tdTitle'>mix ratio</td>
                  <td>6-10%</td>
                  <td>6-10%</td>
                  <td>6-10%</td>
                  <td>3-10%</td>
                  <td>6-10%</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default ProductTableData;
