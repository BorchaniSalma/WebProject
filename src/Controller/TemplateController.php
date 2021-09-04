<?php

namespace App\Controller;

use App\Entity\Comment;
use App\Entity\User;
use App\Form\CommentType;
use Container5xIA5H7\getCommentRepositoryService;
use DateTime;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\Persistence\ObjectManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;


class TemplateController extends AbstractController
{
    /**
     * @Route("/template/{id}",name="the template")
     */
    public function index ($id,Request $request, EntityManagerInterface $manager)

    {
        $comment = new Comment();
        $form=$this->createForm(CommentType::class,$comment);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $comment->setCreatedAt(new DateTime());
            $manager->persist($comment);
            $manager->flush();

        }
        $repository = $this->getDoctrine()->getRepository('App:Comment');
        $comments= $repository->findAll();
        return $this->render('template/index.html.twig', [
            'controller_name' => 'TemplateController',
            'personality' => $id,
            'commentForm' => $form->createView(),
            'Comments'=>$comments,
            ]);
    }
}
