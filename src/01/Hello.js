import './Hello.css';
import MyCome from './MyCom';

function Hello() {
    const name = 'PNU';
    return (
        //fragment tage
        <>
            <div className="hellodiv">
                {name}님 안녕하세요!!
            </div>
            <MyCome/>
        </>
    );

}
export default Hello;