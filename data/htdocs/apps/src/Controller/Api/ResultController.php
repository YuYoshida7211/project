<?php
namespace App\Controller\Api;

use Cake\Controller\Controller;
use Cake\Filesystem\Folder;
use Cake\Filesystem\File;

class resultController extends Controller
{
    public function initialize(): void
    {
        parent::initialize();
        $this->loadComponent('RequestHandler');
    }

    public function index($mode = null) {
        $this->viewBuilder()->setClassName('Json');

        $dir = new Folder(ROOT . DS . 'api_result');
        $file = $dir->find('result.json');

        $file = new File($dir->pwd() . DS . $file[0],true);

        $array = json_decode($file->read(),true);

        $this->set('result' , $array);
        $this->viewBuilder()->setClassName('Json');
        $this->viewBuilder()->setOption('serialize', 'result');
        $this->viewBuilder()->setOption('jsonOptions' , JSON_UNESCAPED_UNICODE);
    }


}