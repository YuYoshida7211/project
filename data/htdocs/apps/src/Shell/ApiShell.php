<?php
namespace App\Shell;

use Cake\Console\Shell;
use App\Controller\Api\TwitterController;
use App\Controller\Api\YoutubeController;
use Cake\Filesystem\Folder;
use Cake\Filesystem\File;


class ApiShell extends Shell{
    public function initialize(): void
    {
        parent::initialize();
        $this->twitter = new TwitterController();
        $this->youtube = new YoutubeController();
    }

    public function main()
    {
      $this->out('Hello world.');

      // twitterのトレンドワードのツイートを取得する
      $twitter_result = $this->twitter->index();
      // youtubeの人気動画を取得する
      $youtube_result = $this->youtube->index();

      $result_json = '{"twitter_result":' . $twitter_result . ',"youtube_result":' . $youtube_result . '}';

      // result.json　に書き込む
      $dir = new Folder(ROOT . DS . 'api_result');
      $file = $dir->find('result.json');

      $file = new File($dir->pwd() . DS . $file[0],true);
      $file->write($result_json);


    }
}