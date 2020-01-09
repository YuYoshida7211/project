<?php
namespace App\Controller\Api;

require "vendor/autoload.php";
use Cake\Controller\Controller;
use Abraham\TwitterOAuth\TwitterOAuth;
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


        $this->set([
            'result' => $file->read(),
            '_serialize' => ['result']
        ]);
    }
}