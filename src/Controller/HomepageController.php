<?php
namespace App\Entity;
namespace App\Controller;

use App\Entity\User;
use App\Form\UserType;
use App\Form\ConnexionType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;


class HomepageController extends AbstractController
{
    /**
     * @Route("/",name = "homepage")
     */
    public function index()
    {
        return $this->render('homepage/index.html.twig', [
            'controller_name' => 'HomepageController',
        ]);
    }
    /**
     * @Route("/connexion",name="login")
     */
    public function connexion(){
       
        return $this->render('homepage/connect.html.twig', [
            'controller_name' => 'HomepageController',
        ]);
    }
    /**
     * @Route("/deconnexion",name="logout")
     */
    public function deconnexion(){
       
        return $this->render('homepage/connect.html.twig', [
            'controller_name' => 'HomepageController',
        ]);
    }

    /**
     * @Route("/signUp/",name="creation")
     */

    public function signUp(UserPasswordEncoderInterface $encoder,EntityManagerInterface $manager ,Request $request)
    {
    $user=new User();
    $form=$this->createForm(UserType::class,$user);
    $form->handleRequest($request);
    if($form->isSubmitted() && $form->isValid()){
        $hash = $encoder->encodePassword($user,$user->getPassword());
        $user->setCreatedAt(new \DateTime());
        $user->setPassword($hash);
        $manager->persist($user);
        $manager->flush();
        return $this->render('homepage/index.html.twig', [
            'name'=>$user->getName()

        ]);
    }

    return $this->render('homepage/signUp.html.twig' ,[
    'form'=>$form->createView()

        ]);
    }
    
}
