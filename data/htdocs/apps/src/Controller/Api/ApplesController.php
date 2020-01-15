<?php
namespace App\Controller\Api;
use Cake\Controller\Controller;

class ApplesController extends Controller
{
    public function initialize(): void
    {
        parent::initialize();
        $this->loadComponent('RequestHandler');
    }

    public function index($mode = null) {
        $apples = ["Tsugaru", "Fuji"];
        $this->set([
            'apples' => $apples,
            '_serialize' => ['apples']
        ]);
    }
}