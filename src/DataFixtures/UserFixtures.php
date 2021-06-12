<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use App\Entity\User;
class UserFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        for ($i=0 ; $i<=10;$i++){
            $user=new user();
            $user->setName("userName$i");
            $user->setLastName("LastName$i");
            $user->setEmail("userName$i@gmail.com");
            $user->setCreatedAt(new \DateTime());
            $manager->persist($user);
        }


        $manager->flush();
    }
}
