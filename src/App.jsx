import React, {useState,useRef} from 'react';
import logo from './Assets/Grupo 258.svg';
import bg_1 from './Assets/Grupo 32967.svg';
import bg_2 from './Assets/Grupo 32966.svg'; 
import bg_3 from './Assets/Grupo 36052.svg'; 
import bg_4 from './Assets/Elipse 197.svg'; 
import Calendar from './Assets/calendar.png';
import arrowLines from './Assets/arrowLines.png';
import SignOut from './Assets/SignOut.png';
import './styles/App.css';
import {data} from './data'


import { BrowserRouter, Routes, Route } from 'react-router-dom';


export function Session() {
  return (
    <>
    <div className="Card1">
      
        <img className='bg1' src={bg_1} alt="" />
        <img className='bg2' src={bg_2} alt="" />
        <img className='bg5' src={bg_4} alt="" /> 
        <img className='bg6' src={bg_4} alt="" /> 
        <div className='Box'>
            <form action='/Inversion' method="get">
                <img className='bg3' src={bg_3} alt="" />
                  <div className='box-1'>
                    <div className="sufiBox">
                        <img className='img258' src={logo} alt=""/>
                        <p className='Sufp'>Sufipay</p>
                        <p className='A-co'>Administrador comercial</p>
                    </div>
                    <div className="box-2">
                      <div className='box-3'>
                        <input placeholder=' ' type="text" className="InL1"  required/>
                        <label htmlFor="" className="Animation">Usuario</label>
                      </div>
                      <div className='box-3'>
                        <input placeholder=' ' type="password" className="InL1" required/>
                        <label htmlFor="" className="Animation">Contraseña</label>
                      </div>
                    </div>
                    <div className="btn-1">
                      <input type="submit" value='INGRESAR'/>
                    </div>
                    <a className='Forgot' href="">No recuerdo mi contraseña</a>
                  </div>
                <img className='bg4' src={bg_3} alt="" />
            </form>
        </div>
    </div>


    </>
  );
}


export function Inversion() {
  const [searchFecha, setFecha]= useState("");
  const [searchFecha2, setFecha2]= useState("");
  const [searchTipoDoc,setTipoDoc]=useState("");

  const [searchNumberDoc, setNumberDoc] =useState("");
  const [DB_1, setSearchDesembolso]=useState("");
  const [isOP, setIsop] =useState(false);

  // Limpio el valor
  function Vacio(){
    setFecha('');
    setFecha2('');
    setTipoDoc('');
    setNumberDoc('');
    setSearchDesembolso('');
    setIsop(false);
  }
  // Tipo Doc: Aparecer el boton  rojo en hand()
  function hand(e){
    const valor = e.target.value;
    setIsop(valor || searchNumberDoc || DB_1 || searchFecha || searchFecha2);
    setTipoDoc(valor);
  }
  function hand1(e){
    const valor = e.target.value;
    
    setIsop(valor || searchTipoDoc || DB_1 || searchFecha || searchFecha2);

    setNumberDoc(valor);

  }
  function hand2(e){
    const valor = e.target.value;
    setIsop(valor || searchTipoDoc || searchNumberDoc || searchFecha || searchFecha2);

    setSearchDesembolso(valor);

  }

  function hand3(e) {
    const valor = e.target.value
    setIsop(valor || searchTipoDoc || searchNumberDoc || DB_1 || searchFecha2);

    setFecha(valor);
  }

  function hand4(e) {
    const valor = e.target.value;
    setIsop(valor || searchTipoDoc || searchNumberDoc || DB_1 || searchFecha);
    setFecha2(valor);
  }



  
  return (

  <>
    <div className='Card'>

        <div className='blockBox'>
            <div className='sticky'>
                <nav className='Barnav nv'>
                  <div></div>
                  <div>
                    <img className='navlogo' src={logo} alt="" />
                  </div>
                  <div className='boC'>
                    <form action="/">
                    <input id='ir' type="submit" value="" hidden/>
                    
                    <label  className="txtCerrar" htmlFor="ir">
                      Cerrar sesión
                    </label>

                    <label htmlFor="ir" className='vs1'></label>
                    </form>
                    <img className='icoSalir'  src={SignOut} alt=""/>
                  </div>
                </nav>

                <nav className='Barnav2 nv'>
                  <div>
                    <p>Mis desembolsos</p>
                  </div>
                  <div className='btn3'>
                    <img src={arrowLines} alt="" />
                    <h4>Descargar</h4>
                  </div>
                </nav>
                <nav className='Barnav3 nv'>
                  {isOP && <div className="Vaciar activo" id='Vclick' onClick={Vacio}>
                    X
                  </div>}
            
                  <div className="boxIp">
                    <div className="doc wg">
                      <input type="text" id='Lleno' on value={searchTipoDoc} className='InL1'onChange={hand} placeholder=' '/>
                      <label htmlFor="" className='Animation'>Tipo doc.</label>
                      <label className='arrowB' htmlFor=""></label>
                    </div>
                    <div className="Numero wg">
                      <input type="text" id='Lleno' value={searchNumberDoc} className='InL1' onChange={hand1} placeholder=' '/>
                      <label htmlFor="" className='Animation'>Número de documento</label>
                    </div>
                    <div className="desembolso wg">
                      <input type="text" id='Lleno' value={DB_1} className='InL1' onChange={hand2} placeholder=' '/>
                      <label htmlFor="" className='Animation'>Número de desembolso.</label>
                    </div>
                    <div className="day wg">
                      <input type="text" id='Lleno' value={searchFecha} className='InL1' onChange={hand3} placeholder=' '/>
                      <label htmlFor="" className='Animation'>Desde.</label>
                      <label htmlFor="" className='Calendar'><img src={Calendar} alt="" /></label>
                    </div>
                    <div className="hasta wg">
                      <input type="text" id='Lleno' value={searchFecha2}  className='InL1' onChange={hand4} placeholder=' '/>
                      <label htmlFor="" className='Animation'>Hasta</label>
                      <label htmlFor="" className='Calendar'><img src={Calendar} alt="" /></label>                   
                    </div>
                </div>
              </nav>  
              <div className='nvtbs'>
                  <div className="bbs">

                  <p className='F1 Color1'>Fecha y hora</p>
                  <p className='F2 Color1'>Número de desembolso</p>
                  <p className='F3 Color1'>Tipo de documento</p>
                  <p className='F4 Color1'>Número de documento</p>
                  <p className='F5 Color1'>Monto</p>
      
                  </div>
              </div>

            </div>
            <div>

            <table className='Tbs'>
              <thead>
                  <tr hidden>
                    <th>Fecha y hora</th>
                    <th>Número de desembolso</th>
                    <th>Tipo de documento</th>
                    <th>Número de documento</th>
                    <th>Monto</th>
                  </tr>
              </thead>
              <tbody>
                {
                  data
                    .filter((e) => {
                      return (searchFecha.toString() === ''
                      ? e
                      : e.Fechas.toString().includes(searchFecha)) 
                    })
                    .filter((e) => {
                      return (searchFecha2.toString() === ''
                      ? e
                      : e.Fechas.toString().includes(searchFecha2))
                    })
                    .filter((e) => {
                      return (DB_1.toLowerCase() === '' 
                      ? e
                      : e.desembolso.toString().includes(DB_1))
                    })
                    .filter((e)=>{
                      return (searchTipoDoc.toString() === ''
                      ? e
                      : e.Tipo_Documentos.toLowerCase().includes(searchTipoDoc))
                    })
                    .filter((e)=>{
                      return (searchNumberDoc.toLowerCase() === ''
                      ? e
                      : e.Numero_Doc.toString().includes(searchNumberDoc))
                    })
                    .map((x)=>(
                    
                    <tr key={x.id}>
                    <td className="td1">
                        <div className="td1_1">

                        {x.Fechas} {x.Horas}

                        </div>
                      </td>

                    <td className="td2">
                      <div className="td1_2">
                      {x.desembolso}
                      </div>
                      </td>

                    <td className="td3">
                      <div className="td1_3">

                      {x.Tipo_Documentos}
                      </div>
                      </td>
                    
                    <td className="td4">{x.Numero_Doc}</td>


                    <td className="td5">${x.Monto}</td>
                  </tr>
                  ))
                  
                }
              
              </tbody>
            </table>
            </div>


        </div>
        <div className='Rg'>
        <div className="Rk">
          
          <div className='flc a2'>
            <h4></h4>
          </div>

          <label className='boxN' htmlFor="">1</label>

          <div className='diez'>
            <p>de 10</p>
          </div>

          <div className='flc'>
            <h4></h4>
          </div>

        </div>


          <div className='Rg1'>
            <input type="texta" className='InL1' placeholder=' '/>
            <label className='Animation' htmlFor="">Registros por página</label>
            <label className='arrowB' htmlFor=""></label>
          </div>
        </div>

    </div>
  </>
  );
}



export function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Session />} />
      <Route path='/Inversion' element={<Inversion />} />
    </Routes>
    </BrowserRouter>
  )
}