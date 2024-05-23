import logo from './img/face.png'
import add from './img/add.png'
import list from './img/list.png'
import home from './img/home (2).png'
const SideBare=()=>{
    return(
        <div style={{width: 326, height: 768, position: 'relative'}}>
  <div style={{width: 326, height: 768, left: 0, top: 0, position: 'absolute', background: 'black', borderTopLeftRadius: 20, borderTopRightRadius: 20}} />
  <div style={{width: 100, height: 100, left: 36, top: 26, position: 'absolute', background: '#FFEA00', borderRadius: 95}} />
  <img style={{width: 100, height: 100, left: 36, top: 26, position: 'absolute'}} src={logo} />
  <div style={{width: 137, height: 36, left: 153, top: 58, position: 'absolute', color: '#FFEA00', fontSize: 24, fontFamily: 'Poppins', fontWeight: '700', wordWrap: 'break-word'}}>TuniAnime</div>
  <div style={{width: 137, height: 23, left: 104, top: 174, position: 'absolute', color: '#FFEA00', fontSize: 16, fontFamily: 'Poppins', fontWeight: '700', wordWrap: 'break-word'}}>Dashboard</div>
  <div style={{width: 133, height: 27, left: 104, top: 231, position: 'absolute', color: '#FFEA00', fontSize: 16, fontFamily: 'Poppins', fontWeight: '700', wordWrap: 'break-word'}}>Ajouter un type</div>
  <div style={{width: 133, height: 27, left: 104, top: 385, position: 'absolute', color: '#FFEA00', fontSize: 16, fontFamily: 'Poppins', fontWeight: '700', wordWrap: 'break-word'}}>Liste des types</div>
  <div style={{width: 168, height: 27, left: 104, top: 436, position: 'absolute', color: '#FFEA00', fontSize: 16, fontFamily: 'Poppins', fontWeight: '700', wordWrap: 'break-word'}}>Liste des catégories</div>
  <div style={{width: 168, height: 27, left: 104, top: 487, position: 'absolute', color: '#FFEA00', fontSize: 16, fontFamily: 'Poppins', fontWeight: '700', wordWrap: 'break-word'}}>Liste des produits</div>
  <div style={{width: 179, height: 27, left: 104, top: 283, position: 'absolute', color: '#FFEA00', fontSize: 16, fontFamily: 'Poppins', fontWeight: '700', wordWrap: 'break-word'}}>Ajouter une catégorie</div>
  <div style={{width: 179, height: 27, left: 104, top: 334, position: 'absolute', color: '#FFEA00', fontSize: 16, fontFamily: 'Poppins', fontWeight: '700', wordWrap: 'break-word'}}>Ajouter un produit</div>
  <img style={{width: 25, height: 25, left: 61, top: 172, position: 'absolute'}} src={home} />
  <img style={{width: 25, height: 25, left: 61, top: 233, position: 'absolute'}} src={add} />
  <img style={{width: 25, height: 25, left: 61, top: 284, position: 'absolute'}} src={add} />
  <img style={{width: 25, height: 25, left: 61, top: 335, position: 'absolute'}} src={add} />
  <img style={{width: 25, height: 25, left: 61, top: 386, position: 'absolute'}} src={list} />
  <img style={{width: 25, height: 25, left: 61, top: 437, position: 'absolute'}} src={list} />
  <img style={{width: 25, height: 25, left: 61, top: 488, position: 'absolute'}} src={list} />
</div>
    )}

export default SideBare;