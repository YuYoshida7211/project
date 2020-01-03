<?php
namespace App\Controller\Api;

require "vendor/autoload.php";
use Cake\Controller\Controller;
use Abraham\TwitterOAuth\TwitterOAuth;

class twitterController extends Controller
{
    public function initialize(): void
    {
        parent::initialize();
        $this->loadComponent('RequestHandler');
    }

    public function index($mode = null) {

      // twitterのコネクション生成に必要な情報を設定
      $consumerKey = "MdCFvSj79eUE0uWPzlfM1cSyH";
      $consumerSecret = "P22a0RP9mDy4nVyDueMb6vYSrbodc3dttwXAWJTC0ODrU0TOQT";
      $accessToken = "1118130091672735744-AKjMsdSOTkNRRsDkVjurLv3SZiHKOG";
      $accessTokenSecret = "BXGy6jMWRmCpcbRBnUmclrhOlkfsHojun3uJ6kFAG1ce5";

      // コネクションを生成
      $connection = new TwitterOAuth ( $consumerKey, $consumerSecret, $accessToken, $accessTokenSecret );

      // トレンドワード取得
      $request = $connection->OAuthRequest(
          "https://api.twitter.com/1.1/trends/place.json","GET",array("id"=>"1118370")
      ); //idは地域を表している　1118370＝東京　1118550=横浜
      $json_array = json_decode($request,true);
      $this->set('json',$request);
      $this->set(compact('json_array'));

      for ($i = 0; $i < 1; $i++){
        $trend_word = $json_array[0]['trends'][$i]['name'];
        // キーワード検索してtweetを取得
        $statuses = $connection->get ( 'search/tweets', array (
        'lang' => 'ja',
        'q' => $trend_word,
        'result_type' => 'recent', // 人気投稿
        'count' => '10'
        ) );

        $posts = array();
        foreach ($statuses->statuses as $key => $value) {
            array_push($posts , $value);

        }
      }

      $this->set([
          'posts' => $posts,
          '_serialize' => ['posts']
      ]);

    }
}