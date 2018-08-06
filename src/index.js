import sayHello from './hello';
import './index.scss';
import clitehd from 'clitehd-external-api';
document.getElementById('root').innerHTML = sayHello();

document.getElementById('createConfButton').addEventListener('click', function(){
	clitehd.joinRoom('tanvir');
});
